import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Download, Play, SkipBack, SkipForward } from 'lucide-react'
import { assets, routes } from '../config/app'
import { lessons } from '../data/mockData'
import { useCompletedLessons, useDemoRole } from '../hooks/useDemoState'

export function LessonPage() {
  const { id } = useParams()
  const lesson = lessons[id] ?? Object.values(lessons)[0]
  const { role } = useDemoRole()
  const { completedLessons, toggleLesson } = useCompletedLessons()
  const isCompany = role === 'empresa'

  const completed = useMemo(
    () => completedLessons.includes(lesson.id),
    [completedLessons, lesson.id]
  )

  function handleComplete() {
    toggleLesson(lesson.id)
  }

  return (
    <div className="space-y-6">
      <Link
        to={routes.course(lesson.courseId)}
        className="text-sm font-semibold text-brand-700"
      >
        ← Voltar para o curso
      </Link>

      <section className="overflow-hidden rounded-[2.2rem] border border-white/70 bg-white shadow-soft">
        <div className="bg-brand-700 px-5 py-4 text-white">
          <p className="text-sm uppercase tracking-[0.24em] text-white/70">
            {lesson.title}
          </p>
          <h1 className="mt-1 text-2xl font-black">{lesson.headline}</h1>
        </div>

        <div className="space-y-5 p-5">
          <div className="overflow-hidden rounded-[2rem] bg-brand-900 p-4 text-white">
            <div className="flex aspect-video items-center justify-center rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-brand-700 to-brand-900">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-700 shadow-soft">
                <Play className="ml-1 h-8 w-8" />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-white/75">
              <span>{lesson.watched}</span>
              <span>{lesson.videoLength}</span>
            </div>
            <div className="mt-3 flex items-center justify-center gap-5">
              <button
                type="button"
                className="rounded-full bg-white/12 p-3"
                aria-label="Anterior"
              >
                <SkipBack className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="rounded-full bg-white p-4 text-brand-700"
                aria-label="Play"
              >
                <Play className="ml-0.5 h-5 w-5" />
              </button>
              <button
                type="button"
                className="rounded-full bg-white/12 p-3"
                aria-label="Proxima"
              >
                <SkipForward className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 rounded-[1.6rem] border border-slate-100 bg-mist p-2 text-center text-sm font-semibold text-slate-500">
            <div className="rounded-[1.2rem] bg-white px-3 py-3 text-brand-700 shadow-soft">
              Conteudo
            </div>
            <div className="rounded-[1.2rem] px-3 py-3">Materiais</div>
            <div className="rounded-[1.2rem] px-3 py-3">Exercicios</div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-ink">Sobre esta aula</h2>
            <p className="text-sm leading-7 text-slate-600">
              {isCompany
                ? 'Nesta demonstracao, a empresa visualiza como a trilha pode ser usada para capacitar a equipe com foco em atendimento mais inclusivo.'
                : lesson.description}
            </p>
          </div>

          <div className="space-y-3">
            {lesson.materials.map((material) => (
              <div
                key={material}
                className="flex items-center justify-between rounded-[1.5rem] border border-slate-100 bg-mist px-4 py-4"
              >
                <div>
                  <p className="text-sm font-semibold text-ink">{material}</p>
                  <p className="text-xs text-slate-500">Material complementar</p>
                </div>
                <a
                  href={assets.courseMaterial}
                  className="rounded-full bg-white p-3 text-brand-700 shadow-soft"
                  download
                  aria-label="Baixar PDF"
                >
                  <Download className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleComplete}
            className={`w-full rounded-full px-5 py-4 text-sm font-semibold shadow-glow transition hover:-translate-y-0.5 ${
              completed
                ? 'bg-gold text-brand-900'
                : 'bg-brand-700 text-white'
            }`}
          >
            {completed
              ? isCompany
                ? 'Trilha marcada como vista'
                : 'Aula concluida'
              : isCompany
                ? 'Marcar demo como vista'
                : 'Concluir aula'}
          </button>
        </div>
      </section>
    </div>
  )
}
