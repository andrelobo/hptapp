import { Link } from 'react-router-dom'
import { CourseCard } from '../components/CourseCard'
import { SectionTitle } from '../components/SectionTitle'
import { routes } from '../config/app'
import { courses } from '../data/mockData'

const tabs = ['Todos', 'Em andamento', 'Concluidos']

export function CoursesPage() {
  return (
    <div className="space-y-6">
      <SectionTitle eyebrow="Trilhas" title="Meus Cursos" />

      <div className="grid grid-cols-3 gap-2 rounded-[1.6rem] border border-white/70 bg-white p-2 shadow-soft">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            type="button"
            className={`rounded-[1.2rem] px-3 py-3 text-sm font-semibold transition ${
              index === 0 ? 'bg-brand-700 text-white' : 'text-slate-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} compact />
        ))}
      </div>

      <Link
        to={routes.certificates}
        className="block rounded-[1.8rem] bg-brand-900 px-5 py-5 text-white shadow-glow"
      >
        <p className="text-sm uppercase tracking-[0.24em] text-white/70">
          Proximo passo
        </p>
        <h2 className="mt-2 text-xl font-bold">Acompanhe seus certificados</h2>
      </Link>
    </div>
  )
}
