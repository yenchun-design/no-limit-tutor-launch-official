
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Function to extract routes from App.tsx
function extractRoutesFromApp() {
  const appContent = fs.readFileSync(toAbsolute('src/App.tsx'), 'utf-8')
  const routes = []
  
  // Match Route components with path prop
  const routeRegex = /<Route\s+path="([^"]+)"/g
  let match
  
  while ((match = routeRegex.exec(appContent)) !== null) {
    const routePath = match[1]
    // Skip the catch-all route "*"
    if (routePath !== '*') {
      routes.push(routePath)
    }
  }
  
  return routes
}

// Function to ensure directory exists
function ensureDirectoryExists(filePath) {
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

const routesToPrerender = extractRoutesFromApp()

;(async () => {
  for (const url of routesToPrerender) {
    try {
      const appHtml = render(url);
      const html = template.replace(`<!--app-html-->`, appHtml)

      // Determine the output file path
      let filePath
      if (url === '/') {
        filePath = 'dist/index.html'
      } else {
        // For routes like /privacy, create /privacy.html
        // For nested routes like /blog/post, create /blog/post.html
        filePath = `dist${url}.html`
      }

      const fullPath = toAbsolute(filePath)
      
      // Ensure the directory exists before writing
      ensureDirectoryExists(fullPath)
      
      fs.writeFileSync(fullPath, html)
      console.log('pre-rendered:', filePath)
    } catch (error) {
      console.error('Error prerendering route:', url, error.message)
      process.exit(1)
    }
  }
})()
