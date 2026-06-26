import { useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { routes } from '../config/app'
import { authProfiles } from '../data/mockData'

function useQueryMode() {
  const location = useLocation()
  return useMemo(() => new URLSearchParams(location.search), [location.search])
}

export function LoginPage() {
  const navigate = useNavigate()
  const query = useQueryMode()
  const initialMode = query.get('mode') === 'signup' ? 'signup' : 'login'
  const [mode, setMode] = useState(initialMode)
  const [profile, setProfile] = useState('aluno')

  function handleSubmit(event) {
    event.preventDefault()
    window.localStorage.setItem('hp-role', profile)
    navigate(routes.dashboard)
  }

  return (
    <div className="min-h-screen bg-brand-mesh px-5 py-8">
      <div className="mx-auto max-w-md space-y-6">
        <Link to={routes.welcome} className="text-sm font-semibold text-brand-700">
          ← Voltar
        </Link>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500">
            Acesso ao app
          </p>
          <h1 className="text-3xl font-black text-brand-900">
            {mode === 'login' ? 'Entrar na plataforma' : 'Criar sua conta'}
          </h1>
          <p className="text-base leading-7 text-slate-600">
            Fluxo demonstrativo para aluno e empresa. A autenticacao real sera
            conectada depois pelo backend separado.
          </p>
        </div>

        <div className="grid grid-cols-2 rounded-full border border-brand-100 bg-white p-1 shadow-soft">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
              mode === 'login'
                ? 'bg-brand-700 text-white'
                : 'text-brand-700 hover:bg-brand-50'
            }`}
          >
            Entrar
          </button>
          <button
            type="button"
            onClick={() => setMode('signup')}
            className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
              mode === 'signup'
                ? 'bg-brand-700 text-white'
                : 'text-brand-700 hover:bg-brand-50'
            }`}
          >
            Cadastro
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-[2rem] border border-white/70 bg-white p-6 shadow-soft"
        >
          <label className="block space-y-2">
            <span className="text-sm font-semibold text-ink">
              E-mail ou telefone
            </span>
            <input
              type="text"
              placeholder="voce@exemplo.com"
              className="w-full rounded-2xl border border-slate-200 bg-mist px-4 py-3 outline-none transition focus:border-brand-300"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-semibold text-ink">Senha</span>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-2xl border border-slate-200 bg-mist px-4 py-3 outline-none transition focus:border-brand-300"
            />
          </label>

          {mode === 'signup' ? (
            <label className="block space-y-2">
              <span className="text-sm font-semibold text-ink">
                Nome completo
              </span>
              <input
                type="text"
                placeholder="Andre da Silva"
                className="w-full rounded-2xl border border-slate-200 bg-mist px-4 py-3 outline-none transition focus:border-brand-300"
              />
            </label>
          ) : null}

          <div className="space-y-3">
            <p className="text-sm font-semibold text-ink">Perfil de acesso</p>
            <div className="space-y-3">
              {authProfiles.map((item) => (
                <label
                  key={item.id}
                  className={`block cursor-pointer rounded-[1.5rem] border px-4 py-4 transition ${
                    profile === item.id
                      ? 'border-brand-300 bg-brand-50'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="profile"
                      checked={profile === item.id}
                      onChange={() => setProfile(item.id)}
                      className="mt-1"
                    />
                    <div>
                      <p className="font-semibold text-ink">{item.title}</p>
                      <p className="text-sm leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-brand-700 px-5 py-4 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
          >
            {mode === 'login' ? 'Entrar no dashboard' : 'Criar conta e entrar'}
          </button>
        </form>
      </div>
    </div>
  )
}
