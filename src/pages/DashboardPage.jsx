import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BellRing,
  BriefcaseBusiness,
  Clock3,
  UserRoundSearch
} from 'lucide-react'
import { CourseCard } from '../components/CourseCard'
import { SectionTitle } from '../components/SectionTitle'
import { routes } from '../config/app'
import { alerts, courses } from '../data/mockData'
import { useDashboardViewModel } from '../hooks/useDemoState'

export function DashboardPage() {
  const { role, roleMeta, stats, companyTalentSpotlight, communityHighlights } =
    useDashboardViewModel()
  const featuredCourse = courses[0]
  const isCompany = role === 'empresa'

  return (
    <div className="space-y-6">
      <section className="rounded-[2.2rem] bg-brand-700 p-5 text-white shadow-glow">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-white/75">{roleMeta.eyebrow}</p>
            <h2 className="mt-1 text-3xl font-black">{roleMeta.greeting}</h2>
          </div>
          <div className="rounded-full bg-white/15 p-3">
            <BellRing className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-5 rounded-[1.8rem] bg-white p-4 text-brand-700">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold">
                {isCompany ? 'Trilha recomendada' : 'Meus Cursos'}
              </p>
              <h3 className="mt-1 text-lg font-bold">
                {isCompany ? 'Libras para Atendimento' : featuredCourse.title}
              </h3>
            </div>
            <Link
              to={routes.courses}
              className="text-sm font-semibold text-brand-500"
            >
              Ver todos
            </Link>
          </div>
          <p className="mt-3 text-sm text-slate-500">
            {isCompany
              ? 'Capacitacao indicada para equipes comerciais e recepcao.'
              : `${featuredCourse.progress}% concluido`}
          </p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-brand-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-700"
              style={{ width: `${isCompany ? 68 : featuredCourse.progress}%` }}
            />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-3">
        {stats.map((item) => (
          <article
            key={item.id}
            className="rounded-[1.6rem] border border-white/70 bg-white p-4 text-center shadow-soft"
          >
            <p className="text-xl font-black text-brand-700">{item.value}</p>
            <p className="mt-2 text-xs font-semibold leading-5 text-slate-500">
              {item.label}
            </p>
          </article>
        ))}
      </section>

      <section className="space-y-4">
        <SectionTitle
          eyebrow={isCompany ? 'Capacitacao' : 'Em andamento'}
          title={isCompany ? 'Trilha sugerida agora' : 'Continue assistindo'}
          action={
            <Link
              to={routes.lesson(featuredCourse.nextLessonId)}
              className="text-sm font-semibold text-brand-600"
            >
              {isCompany ? 'Abrir demo' : 'Abrir aula'}
            </Link>
          }
        />
        <CourseCard course={featuredCourse} compact />
      </section>

      {isCompany ? (
        <section className="space-y-4">
          <SectionTitle eyebrow="Talento" title="Perfil em destaque" />
          <article className="rounded-[1.8rem] border border-white/70 bg-white p-5 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="rounded-[1.4rem] bg-brand-700 p-4 text-white">
                <UserRoundSearch className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-ink">
                      {companyTalentSpotlight.name}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {companyTalentSpotlight.city}
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {companyTalentSpotlight.availability}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {companyTalentSpotlight.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {companyTalentSpotlight.strengths.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-brand-100 bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  to={routes.talents}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700"
                >
                  Ver banco de talentos
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        </section>
      ) : null}

      <section className="space-y-4">
        <SectionTitle
          eyebrow={isCompany ? 'Parcerias' : 'Resumo'}
          title={isCompany ? 'Oportunidades para empresa' : 'Novidades'}
        />
        <div className="space-y-3">
          {(isCompany ? communityHighlights : alerts).map((item) => (
            <article
              key={item.id}
              className="rounded-[1.6rem] border border-white/70 bg-white p-4 shadow-soft"
            >
              <div className="flex items-start gap-3">
                <div
                  className={`rounded-2xl p-3 ${
                    isCompany
                      ? 'bg-brand-900 text-white'
                      : 'bg-brand-50 text-brand-700'
                  }`}
                >
                  {isCompany ? (
                    <BriefcaseBusiness className="h-5 w-5" />
                  ) : (
                    <Clock3 className="h-5 w-5" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
