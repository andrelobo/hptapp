export function ProgressBar({ value }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-brand-100">
      <div
        className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-700 transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}
