import { Award, BriefcaseBusiness, LogOut, UserRound } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { routes } from '../config/app'
import { certificates, companyProfile, talentProfile } from '../data/mockData'
import { resetDemoSession, useDemoRole } from '../hooks/useDemoState'

export function ProfilePage() {
  const navigate = useNavigate()
  const { role } = useDemoRole()
  const isCompany = role === 'empresa'

  function handleLogout() {
    resetDemoSession()
    navigate(routes.welcome)
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[2.2rem] border border-white/70 bg-white p-5 shadow-soft">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-brand-700 text-lg font-black text-white">
            {isCompany ? 'HP' : 'AD'}
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-500">
              {isCompany ? 'Perfil da empresa' : 'Perfil do aluno'}
            </p>
            <h1 className="text-2xl font-black text-ink">
              {isCompany ? companyProfile.name : talentProfile.name}
            </h1>
            <p className="text-sm text-slate-500">
              {isCompany ? companyProfile.city : talentProfile.city}
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          <article className="rounded-[1.5rem] bg-mist p-4 text-center">
            <UserRound className="mx-auto h-5 w-5 text-brand-700" />
            <p className="mt-2 text-lg font-black text-brand-700">4</p>
            <p className="text-xs text-slate-500">
              {isCompany ? 'Trilhas' : 'Cursos'}
            </p>
          </article>
          <article className="rounded-[1.5rem] bg-mist p-4 text-center">
            <Award className="mx-auto h-5 w-5 text-brand-700" />
            <p className="mt-2 text-lg font-black text-brand-700">
              {isCompany
                ? '12'
                : certificates.filter((item) => item.verified).length}
            </p>
            <p className="text-xs text-slate-500">
              {isCompany ? 'Talentos' : 'Certificados'}
            </p>
          </article>
          <article className="rounded-[1.5rem] bg-mist p-4 text-center">
            <BriefcaseBusiness className="mx-auto h-5 w-5 text-brand-700" />
            <p className="mt-2 text-lg font-black text-brand-700">3</p>
            <p className="text-xs text-slate-500">Parcerias</p>
          </article>
        </div>
      </section>

      <section className="rounded-[2rem] bg-brand-900 p-5 text-white shadow-glow">
        <p className="text-sm uppercase tracking-[0.24em] text-white/70">
          {isCompany ? 'Foco atual' : 'Disponibilidade'}
        </p>
        <h2 className="mt-2 text-2xl font-bold">
          {isCompany
            ? companyProfile.focus
            : 'Perfil pronto para Banco de Talentos'}
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/80">
          {isCompany
            ? companyProfile.bio
            : 'Seu curriculo, competencias e certificados ja estao organizados para futuras conexoes com empresas parceiras.'}
        </p>
      </section>

      <button
        type="button"
        onClick={handleLogout}
        className="flex w-full items-center justify-center gap-3 rounded-full border border-brand-200 bg-white px-5 py-4 text-sm font-semibold text-brand-700 shadow-soft transition hover:-translate-y-0.5"
      >
        <LogOut className="h-4 w-4" />
        Sair da demonstracao
      </button>
    </div>
  )
}
