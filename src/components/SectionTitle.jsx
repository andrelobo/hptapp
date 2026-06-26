export function SectionTitle({ eyebrow, title, action }) {
  return (
    <div className="flex items-end justify-between gap-3">
      <div>
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-100/80">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  )
}
