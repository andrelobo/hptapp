import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { routes } from '../config/app'
import { ProgressBar } from './ProgressBar'

export function CourseCard({ course, compact = false }) {
  return (
    <Link
      to={routes.course(course.id)}
      className={`group rounded-[1.8rem] border border-white/60 bg-white p-4 shadow-soft transition hover:-translate-y-1 ${
        compact ? 'flex items-center gap-4' : 'space-y-3'
      }`}
    >
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.3rem] bg-brand-700 text-xl font-bold text-white">
        {course.title
          .split(' ')
          .slice(0, 2)
          .map((word) => word[0])
          .join('')}
      </div>
      <div className="min-w-0 flex-1 space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-ink">{course.title}</p>
            <p className="text-xs text-slate-500">{course.subtitle}</p>
          </div>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-brand-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>{course.progress}% concluido</span>
            <span>{course.duration}</span>
          </div>
          <ProgressBar value={course.progress} />
        </div>
      </div>
    </Link>
  )
}
