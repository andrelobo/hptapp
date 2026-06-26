import { Outlet, useNavigate } from 'react-router-dom'
import { Bell, LogOut, Search } from 'lucide-react'
import { BottomNav } from '../components/BottomNav'
import { DemoProfileSwitch } from '../components/DemoProfileSwitch'
import { routes } from '../config/app'
import { resetDemoSession, useDemoRole } from '../hooks/useDemoState'

export function AppShell() {
  const navigate = useNavigate()
  const { roleMeta } = useDemoRole()

  function handleLogout() {
    resetDemoSession()
    navigate(routes.welcome)
  }

  return (
    <div className="mx-auto min-h-screen max-w-md bg-brand-mesh pb-28">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-900/55 px-5 pb-4 pt-6 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-100/80">
              Heberton Pinheiro
            </p>
            <h1 className="text-lg font-bold text-white">
              Libras no Comercio
            </h1>
            <p className="mt-1 text-sm text-brand-100/70">{roleMeta.shellLabel}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-full border border-white/10 bg-white/10 p-3 text-white shadow-soft"
              aria-label="Buscar"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="rounded-full border border-white/10 bg-white/10 p-3 text-white shadow-soft"
              aria-label="Avisos"
            >
              <Bell className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-soft"
              aria-label="Sair"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
        </div>
        <div className="mt-4">
          <DemoProfileSwitch compact />
        </div>
      </header>

      <main className="px-5 py-5">
        <Outlet />
      </main>

      <BottomNav />
    </div>
  )
}
