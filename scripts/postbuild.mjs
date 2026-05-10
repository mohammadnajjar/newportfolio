import { writeFileSync, existsSync, readdirSync, readFileSync, statSync, cpSync, rmSync } from 'fs'
import { join, extname } from 'path'

const out = 'out'
const allowStaticHtaccess = `Options -Indexes

<IfModule mod_authz_core.c>
  Require all granted
</IfModule>
<IfModule !mod_authz_core.c>
  Order Allow,Deny
  Allow from all
</IfModule>

<FilesMatch "\.(css|js|json|map|svg|png|jpg|jpeg|gif|webp|ico|txt|xml|woff|woff2)$">
  <IfModule mod_headers.c>
    Header set Cache-Control "public, max-age=31536000, immutable"
  </IfModule>
</FilesMatch>

<IfModule mod_security.c>
  SecFilterEngine Off
  SecFilterScanPOST Off
</IfModule>
`

writeFileSync(join(out, '.htaccess'), allowStaticHtaccess)
console.log('✓ Created out/.htaccess')

// 2. Rename _next → assets (avoids OpenLiteSpeed blocking underscore dirs)
if (existsSync(join(out, '_next'))) {
  rmSync(join(out, 'assets'), { recursive: true, force: true })
  cpSync(join(out, '_next'), join(out, 'assets'), { recursive: true })
  rmSync(join(out, '_next'), { recursive: true, force: true })
  console.log('✓ Copied out/_next → out/assets')
}

if (existsSync(join(out, 'assets'))) {
  writeFileSync(join(out, 'assets', '.htaccess'), allowStaticHtaccess)
  console.log('✓ Created out/assets/.htaccess')
}

if (existsSync(join(out, 'assets', 'static'))) {
  writeFileSync(join(out, 'assets', 'static', '.htaccess'), allowStaticHtaccess)
  console.log('✓ Created out/assets/static/.htaccess')
}

// 3. Replace all /_next/ references with /assets/ in html/js/css files
function replaceInDir(dir) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry)
    if (statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath)
    } else {
      const ext = extname(entry)
      if (['.html', '.js', '.css', '.txt'].includes(ext)) {
        const content = readFileSync(fullPath, 'utf8')
        if (content.includes('/_next/')) {
          writeFileSync(fullPath, content.replaceAll('/_next/', '/assets/'), 'utf8')
        }
      }
    }
  }
}

replaceInDir(out)
console.log('✓ Replaced all /_next/ → /assets/ in html/js/css files')

// 4. Mirror default-locale pages to root so /services works as the English default path.
const defaultLocaleDir = join(out, 'en')

if (existsSync(defaultLocaleDir)) {
  cpSync(join(defaultLocaleDir, 'index.html'), join(out, 'index.html'))

  for (const entry of readdirSync(defaultLocaleDir)) {
    if (entry === 'index.html' || entry === 'index.txt') {
      continue
    }

    const sourcePath = join(defaultLocaleDir, entry)
    const targetPath = join(out, entry)

    if (!existsSync(targetPath)) {
      cpSync(sourcePath, targetPath, { recursive: true })
    }
  }

  console.log('✓ Created root pages from out/en for default-locale routes')
}

// 5. Redirect /en routes back to the root equivalents.
function createRedirectHtml(targetPath) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url=${targetPath}">
  <link rel="canonical" href="${targetPath}">
</head>
<body>
  <script>window.location.replace('${targetPath}')</script>
</body>
</html>`
}

function redirectLocaleDir(dir, targetBase = '/') {
  const htmlPath = join(dir, 'index.html')

  if (existsSync(htmlPath)) {
    writeFileSync(htmlPath, createRedirectHtml(targetBase))
  }

  for (const entry of readdirSync(dir)) {
    if (entry === 'index.html' || entry === 'index.txt') {
      continue
    }

    const fullPath = join(dir, entry)
    if (!statSync(fullPath).isDirectory()) {
      continue
    }

    redirectLocaleDir(fullPath, `${targetBase}${entry}/`)
  }
}

if (existsSync(defaultLocaleDir)) {
  redirectLocaleDir(defaultLocaleDir)
  console.log('✓ Redirected /en routes to root equivalents')
}
