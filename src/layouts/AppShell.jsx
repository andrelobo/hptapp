import { Outlet } from 'react-router-dom'
import { Bell, Search } from 'lucide-react'
import { BottomNav } from '../components/BottomNav'
import { DemoProfileSwitch } from '../components/DemoProfileSwitch'
import { useDemoRole } from '../hooks/useDemoState'

export function AppShell() {
  const { roleMeta } = useDemoRole()

  return (
    <div className="mx-auto min-h-screen max-w-md bg-brand-mesh pb-28">
      <header className="sticky top-0 z-40 border-b border-white/60 bg-white/70 px-5 pb-4 pt-6 backdrop-blur">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-500">
              Heberton Pinheiro
            </p>
            <h1 className="text-lg font-bold text-brand-700">
              Libras no Comercio
            </h1>
            <p className="mt-1 text-sm text-slate-500">{roleMeta.shellLabel}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-full bg-white p-3 text-brand-700 shadow-soft"
              aria-label="Buscar"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="rounded-full bg-white p-3 text-brand-700 shadow-soft"
              aria-label="Avisos"
            >
              <Bell className="h-4 w-4" />
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
