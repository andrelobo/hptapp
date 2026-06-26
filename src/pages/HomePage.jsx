import { Link } from 'react-router-dom'
import {
  Award,
  BookOpenCheck,
  BriefcaseBusiness,
  MessageSquareMore,
  Smartphone
} from 'lucide-react'
import { assets, routes } from '../config/app'
import { InstallPromptButton } from '../components/InstallPromptButton'

const highlights = [
  {
    icon: BookOpenCheck,
    title: 'Cursos praticos',
    description: 'Conteudo objetivo para atendimento, comercio e RH.'
  },
  {
    icon: Award,
    title: 'Certificacao reconhecida',
    description: 'Evolucao acompanhada e certificado digital com QR Code.'
  },
  {
    icon: BriefcaseBusiness,
    title: 'Banco de talentos',
    description: 'Perfil profissional para conectar alunos e empresas.'
  },
  {
    icon: MessageSquareMore,
    title: 'Comunidade ativa',
    description: 'Avisos, eventos e oportunidades em um so lugar.'
  }
]

export function HomePage() {
  return (
    <div className="min-h-screen bg-brand-mesh">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-5 pb-10 pt-8 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={assets.brandMark}
              alt="Marca Heberton Pinheiro"
              className="h-14 w-14 rounded-2xl bg-brand-700/95 p-1 shadow-soft"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500">
                Heberton Pinheiro
              </p>
              <p className="text-xl font-black text-brand-700">
                Libras no Comercio
              </p>
            </div>
          </div>
          <InstallPromptButton />
        </header>

        <section className="grid flex-1 items-center gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-soft">
              <Smartphone className="h-4 w-4" />
              PWA instalavel para celular
            </div>
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-500">
                Comunicacao sem barreiras
              </p>
              <h1 className="max-w-xl text-4xl font-black leading-tight text-brand-900 sm:text-5xl">
                Plataforma de capacitacao, certificacao e inclusao para
                transformar pessoas e empresas.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-600">
                Um MVP visual, claro e pronto para apresentar a instituicoes de
                ensino e empresas parceiras, com jornada mobile-first focada no
                aluno.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to={routes.welcome}
                className="rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                Entrar no app
              </Link>
              <Link
                to={routes.signup}
                className="rounded-full border border-brand-200 bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-soft transition hover:-translate-y-0.5"
              >
                Criar conta
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <article
                    key={item.title}
                    className="rounded-[1.8rem] border border-white/70 bg-white/88 p-5 shadow-soft backdrop-blur"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-lg font-bold text-ink">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-x-6 top-6 h-40 rounded-[2rem] bg-brand-500/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-[#0a3184] p-6 text-white shadow-glow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-white/70">
                    Boas-vindas
                  </p>
                  <h2 className="mt-1 text-3xl font-black">
                    Ola, Andre! 👋
                  </h2>
                </div>
                <img
                  src={assets.brandMark}
                  alt=""
                  className="h-14 w-14 rounded-2xl bg-white p-1"
                />
              </div>

              <div className="mt-6 rounded-[2rem] bg-white/12 p-4">
                <p className="text-sm text-white/80">Curso em destaque</p>
                <h3 className="mt-2 text-xl font-bold">
                  Libras para Atendimento
                </h3>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20">
                  <div className="h-full w-3/4 rounded-full bg-gold" />
                </div>
                <p className="mt-2 text-sm text-white/80">75% concluido</p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-[1.6rem] bg-white p-4 text-center text-brand-700">
                  <p className="text-2xl font-black">2</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                    Cursos
                  </p>
                </div>
                <div className="rounded-[1.6rem] bg-white p-4 text-center text-brand-700">
                  <p className="text-2xl font-black">1</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                    Certificado
                  </p>
                </div>
                <div className="rounded-[1.6rem] bg-white p-4 text-center text-brand-700">
                  <p className="text-2xl font-black">08h</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                    Estudo
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-[2rem] border border-white/15 bg-white/10 p-4">
                <p className="text-sm font-semibold text-white/90">
                  Funciona offline
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Instale no celular e mantenha a apresentacao pronta para
                  demonstracoes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
