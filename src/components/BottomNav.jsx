import { Link, useLocation } from 'react-router-dom'
import {
  BookOpen,
  BriefcaseBusiness,
  House,
  MessageSquareText,
  UserRound
} from 'lucide-react'
import { routes } from '../config/app'

const items = [
  { to: routes.dashboard, label: 'Inicio', icon: House },
  { to: routes.courses, label: 'Cursos', icon: BookOpen },
  { to: routes.community, label: 'Comunidade', icon: MessageSquareText },
  { to: routes.talents, label: 'Talentos', icon: BriefcaseBusiness },
  { to: routes.profile, label: 'Perfil', icon: UserRound }
]

export function BottomNav() {
  const location = useLocation()

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 flex w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 items-center justify-between rounded-[1.75rem] border border-white/70 bg-white/92 px-4 py-3 shadow-glow backdrop-blur">
      {items.map((item) => {
        const Icon = item.icon
        const active = location.pathname.startsWith(item.to)

        return (
          <Link
            key={item.to}
            to={item.to}
            className={`flex min-w-0 flex-1 flex-col items-center gap-1 rounded-2xl px-2 py-1 text-[11px] font-semibold transition ${
              active ? 'text-brand-700' : 'text-slate-500'
            }`}
          >
            <Icon className={`h-5 w-5 ${active ? 'scale-105' : ''}`} />
            <span>{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
