export default function SiteTicker({ items }: { items: string }) {
  const list = items.split('|').map(s => s.trim()).filter(Boolean)
  const doubled = [...list, ...list]

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {doubled.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  )
}
