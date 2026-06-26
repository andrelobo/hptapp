import { Link, useParams } from 'react-router-dom'
import { CheckCircle2, PlayCircle } from 'lucide-react'
import { SectionTitle } from '../components/SectionTitle'
import { routes } from '../config/app'
import { courses } from '../data/mockData'

export function CourseDetailPage() {
  const { id } = useParams()
  const course = courses.find((item) => item.id === id) ?? courses[0]

  return (
    <div className="space-y-6">
      <Link to={routes.courses} className="text-sm font-semibold text-brand-700">
        ← Voltar para cursos
      </Link>

      <section className="rounded-[2.2rem] bg-brand-700 p-6 text-white shadow-glow">
        <p className="text-sm uppercase tracking-[0.24em] text-white/70">
          {course.category}
        </p>
        <h1 className="mt-2 text-3xl font-black">{course.title}</h1>
        <p className="mt-3 text-base leading-7 text-white/80">
          {course.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <span className="rounded-full bg-white/12 px-4 py-2">
            {course.duration}
          </span>
          <span className="rounded-full bg-white/12 px-4 py-2">
            {course.lessons} aulas
          </span>
          <span className="rounded-full bg-white/12 px-4 py-2">
            {course.level}
          </span>
        </div>
      </section>

      <section className="space-y-4">
        <SectionTitle eyebrow="Conteudo" title="O que voce vai aprender" />
        <div className="space-y-3">
          {course.topics.map((topic) => (
            <article
              key={topic}
              className="flex items-center gap-3 rounded-[1.6rem] border border-white/70 bg-white px-4 py-4 shadow-soft"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
              <p className="text-sm font-medium text-ink">{topic}</p>
            </article>
          ))}
        </div>
      </section>

      <Link
        to={routes.lesson(course.nextLessonId)}
        className="flex items-center justify-center gap-3 rounded-full bg-brand-700 px-5 py-4 text-sm font-semibold text-white shadow-glow"
      >
        <PlayCircle className="h-5 w-5" />
        Ir para a proxima aula
      </Link>
    </div>
  )
}
