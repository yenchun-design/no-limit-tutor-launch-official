
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// Read the template
const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')

// Import the render function
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

console.log('Generating static HTML files for the following routes:')
console.log(routesToPrerender.join(', '))
console.log('\n' + '='.repeat(80) + '\n')

for (const url of routesToPrerender) {
  try {
    const appHtml = render(url);
    const html = template.replace(`<!--app-html-->`, appHtml)

    // Determine the output file path
    let filePath
    let displayPath
    if (url === '/') {
      filePath = 'dist/index.html'
      displayPath = 'index.html'
    } else {
      filePath = `dist${url}.html`
      displayPath = `${url}.html`
    }

    const fullPath = toAbsolute(filePath)
    
    // Ensure the directory exists before writing
    ensureDirectoryExists(fullPath)
    
    // Write the file
    fs.writeFileSync(fullPath, html)
    
    console.log(`Generated: ${displayPath}`)
    console.log(`Route: ${url}`)
    console.log(`File size: ${(html.length / 1024).toFixed(2)} KB`)
    console.log('-'.repeat(40))
    
    // Show a preview of the HTML content (first 500 characters)
    const preview = html.substring(0, 500).replace(/\n/g, ' ').replace(/\s+/g, ' ')
    console.log(`Preview: ${preview}...`)
    console.log('\n' + '='.repeat(80) + '\n')
    
  } catch (error) {
    console.error('Error generating HTML for route:', url, error.message)
  }
}

console.log('Static HTML generation complete!')
