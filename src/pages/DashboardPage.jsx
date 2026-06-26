import { Link } from 'react-router-dom'
import { BellRing, Clock3 } from 'lucide-react'
import { CourseCard } from '../components/CourseCard'
import { SectionTitle } from '../components/SectionTitle'
import { routes } from '../config/app'
import { alerts, courses, dashboardStats } from '../data/mockData'

export function DashboardPage() {
  const featuredCourse = courses[0]

  return (
    <div className="space-y-6">
      <section className="rounded-[2.2rem] bg-brand-700 p-5 text-white shadow-glow">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-white/75">Continue sua jornada</p>
            <h2 className="mt-1 text-3xl font-black">Ola, Andre! 👋</h2>
          </div>
          <div className="rounded-full bg-white/15 p-3">
            <BellRing className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-5 rounded-[1.8rem] bg-white p-4 text-brand-700">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold">Meus Cursos</p>
              <h3 className="mt-1 text-lg font-bold">{featuredCourse.title}</h3>
            </div>
            <Link
              to={routes.courses}
              className="text-sm font-semibold text-brand-500"
            >
              Ver todos
            </Link>
          </div>
          <p className="mt-3 text-sm text-slate-500">
            {featuredCourse.progress}% concluido
          </p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-brand-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-700"
              style={{ width: `${featuredCourse.progress}%` }}
            />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-3">
        {dashboardStats.map((item) => (
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
          eyebrow="Em andamento"
          title="Continue assistindo"
          action={
            <Link
              to={routes.lesson(featuredCourse.nextLessonId)}
              className="text-sm font-semibold text-brand-600"
            >
              Abrir aula
            </Link>
          }
        />
        <CourseCard course={featuredCourse} compact />
      </section>

      <section className="space-y-4">
        <SectionTitle eyebrow="Resumo" title="Novidades" />
        <div className="space-y-3">
          {alerts.map((item) => (
            <article
              key={item.id}
              className="rounded-[1.6rem] border border-white/70 bg-white p-4 shadow-soft"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-brand-50 p-3 text-brand-700">
                  <Clock3 className="h-5 w-5" />
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
