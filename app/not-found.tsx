import Link from 'next/link'

export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          background: '#f5f1e8',
          color: '#0a0a0a',
          fontFamily: 'Archivo, sans-serif',
          padding: '40px',
          textAlign: 'center',
        }}
      >
        <div>
          <div style={{ fontSize: '120px', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.05em' }}>404</div>
          <h1 style={{ fontSize: '32px', fontWeight: 800, margin: '16px 0' }}>Page not found</h1>
          <p style={{ fontSize: '16px', color: '#555', maxWidth: '480px', margin: '0 auto 32px' }}>
            The page you&apos;re looking for has moved or never existed.
          </p>
          <Link
            href="/"
            style={{
              display: 'inline-block',
              padding: '16px 32px',
              background: '#0a0a0a',
              color: '#f5f1e8',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: 700,
            }}
          >
            ← Back home
          </Link>
        </div>
      </body>
    </html>
  )
}
