export default function Loading() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        background: 'var(--paper, #f5f1e8)',
        fontFamily: 'var(--font-display)',
        fontSize: '14px',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'var(--ink-mute, #777)',
      }}
    >
      Loading…
    </div>
  )
}
