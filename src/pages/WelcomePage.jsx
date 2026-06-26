import { Link } from 'react-router-dom'
import { HelpCircle } from 'lucide-react'
import { DemoProfileSwitch } from '../components/DemoProfileSwitch'
import { assets, routes } from '../config/app'
import { useDemoRole } from '../hooks/useDemoState'

export function WelcomePage() {
  const { role, roleMeta } = useDemoRole()
  const isCompany = role === 'empresa'

  return (
    <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-md flex-col justify-between bg-brand-mesh px-5 py-8">
      <div className="space-y-8">
        <div className="pt-8">
          <img
            src={assets.brandMark}
            alt="Marca Heberton Pinheiro"
            className="h-16 w-16 rounded-2xl bg-brand-700 p-1 shadow-soft"
          />
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500">
            Heberton Pinheiro Treinamentos
          </p>
          <h1 className="text-4xl font-black leading-tight text-brand-900">
            Libras no Comercio
          </h1>
          <p className="text-xl text-brand-700">
            {isCompany
              ? 'Capacitacao e Inclusao para Empresas'
              : 'Comunicacao Sem Barreiras'}
          </p>
          <p className="max-w-sm text-base leading-7 text-slate-600">
            {isCompany
              ? 'Acompanhe trilhas, talentos e oportunidades para fortalecer a inclusao da sua operacao.'
              : 'Aprenda Libras, conquiste oportunidades e faca a diferenca no mercado com uma experiencia simples e acessivel.'}
          </p>
        </div>

        <DemoProfileSwitch />

        <div className="overflow-hidden rounded-[2.4rem] border border-white/70 bg-white p-5 shadow-soft">
          <div className="rounded-[2rem] bg-brand-700 p-5 text-white">
            <p className="text-sm text-white/75">{roleMeta.shortLabel}</p>
            <h2 className="mt-1 text-2xl font-black">
              {isCompany ? 'Ative a frente inclusiva' : 'Continue aprendendo'}
            </h2>
            <div className="mt-5 rounded-[1.6rem] bg-white/12 p-4">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-lg font-bold text-brand-700">
                  {isCompany ? 'HP' : 'LA'}
                </div>
                <div>
                  <p className="font-semibold">
                    {isCompany
                      ? 'Treinamento para equipe comercial'
                      : 'Libras para Atendimento'}
                  </p>
                  <p className="text-sm text-white/75">
                    {isCompany ? 'Talentos, trilhas e comunidade' : '75% concluido'}
                  </p>
                </div>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full rounded-full bg-gold"
                  style={{ width: isCompany ? '64%' : '75%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3 pt-8">
        <Link
          to={routes.login}
          className="block rounded-full bg-brand-700 px-5 py-4 text-center text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
        >
          {isCompany ? 'Entrar como empresa' : 'Entrar'}
        </Link>
        <Link
          to={routes.signup}
          className="block rounded-full border border-brand-200 bg-white px-5 py-4 text-center text-sm font-semibold text-brand-700 shadow-soft transition hover:-translate-y-0.5"
        >
          {isCompany ? 'Criar acesso demo' : 'Criar conta'}
        </Link>
        <button
          type="button"
          className="mx-auto flex items-center gap-2 pt-2 text-sm font-medium text-brand-700"
        >
          <HelpCircle className="h-4 w-4" />
          Precisa de ajuda?
        </button>
      </div>
    </div>
  )
}
