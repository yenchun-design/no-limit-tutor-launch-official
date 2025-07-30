
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Extract routes from App.tsx by reading the file and parsing Route components
const getRoutesFromApp = () => {
  const appTsxPath = toAbsolute('src/App.tsx')
  const appContent = fs.readFileSync(appTsxPath, 'utf-8')
  
  // Extract all Route path attributes using regex
  const routeRegex = /<Route\s+path=["']([^"']+)["']/g
  const routes = []
  let match
  
  while ((match = routeRegex.exec(appContent)) !== null) {
    const path = match[1]
    // Skip catch-all routes like "*"
    if (path !== '*') {
      routes.push(path)
    }
  }
  
  return routes
}

// Ensure directory exists before writing file
const ensureDirectoryExists = (filePath) => {
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

const routesToPrerender = getRoutesFromApp()

;(async () => {
  for (const url of routesToPrerender) {
    try {
      const appHtml = render(url)
      const html = template.replace(`<!--app-html-->`, appHtml)

      // Convert route path to file path
      let filePath
      if (url === '/') {
        filePath = toAbsolute('dist/index.html')
      } else {
        // Remove leading slash and create path
        const cleanPath = url.replace(/^\//, '')
        filePath = toAbsolute(`dist/${cleanPath}.html`)
      }

      // Ensure directory exists before writing
      ensureDirectoryExists(filePath)
      
      fs.writeFileSync(filePath, html)
      console.log('pre-rendered:', filePath)
    } catch (error) {
      console.error(`Error pre-rendering ${url}:`, error)
    }
  }
})()
