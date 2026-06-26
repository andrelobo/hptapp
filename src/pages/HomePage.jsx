import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  BriefcaseBusiness,
  MessageSquareMore,
  Smartphone
} from 'lucide-react'
import { DemoProfileSwitch } from '../components/DemoProfileSwitch'
import { assets, routes } from '../config/app'
import { InstallPromptButton } from '../components/InstallPromptButton'
import { useDemoRole } from '../hooks/useDemoState'

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
  const { role, roleMeta } = useDemoRole()
  const isCompany = role === 'empresa'

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
                {isCompany
                  ? 'Capacitacao e conexao com talentos'
                  : 'Comunicacao sem barreiras'}
              </p>
              <h1 className="max-w-xl text-4xl font-black leading-tight text-brand-900 sm:text-5xl">
                {isCompany
                  ? 'Um MVP pronto para apresentar trilhas, talentos e parcerias em inclusao.'
                  : 'Plataforma de capacitacao, certificacao e inclusao para transformar pessoas e empresas.'}
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-600">
                {isCompany
                  ? 'Demonstre para empresas parceiras como o app pode apoiar treinamento interno, empregabilidade e relacionamento com a comunidade.'
                  : 'Um MVP visual, claro e pronto para apresentar a instituicoes de ensino e empresas parceiras, com jornada mobile-first focada no aluno.'}
              </p>
            </div>
            <div className="max-w-md">
              <DemoProfileSwitch />
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
                {isCompany ? 'Simular acesso empresa' : 'Criar conta'}
              </Link>
              <Link
                to={routes.courses}
                className="rounded-full border border-brand-100 bg-brand-50 px-6 py-3 text-sm font-semibold text-brand-700 transition hover:-translate-y-0.5"
              >
                Ver trilhas
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
                    {roleMeta.shortLabel}
                  </p>
                  <h2 className="mt-1 text-3xl font-black">
                    {roleMeta.greeting}
                  </h2>
                </div>
                <img
                  src={assets.brandMark}
                  alt=""
                  className="h-14 w-14 rounded-2xl bg-white p-1"
                />
              </div>

              <div className="mt-6 rounded-[2rem] bg-white/12 p-4">
                <p className="text-sm text-white/80">
                  {isCompany ? 'Trilha recomendada' : 'Curso em destaque'}
                </p>
                <h3 className="mt-2 text-xl font-bold">
                  {isCompany
                    ? 'Libras para Atendimento'
                    : 'Libras para Atendimento'}
                </h3>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full rounded-full bg-gold"
                    style={{ width: isCompany ? '68%' : '75%' }}
                  />
                </div>
                <p className="mt-2 text-sm text-white/80">
                  {isCompany
                    ? 'Indicada para recepcao, caixa e vendas.'
                    : '75% concluido'}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-[1.6rem] bg-white p-4 text-center text-brand-700">
                  <p className="text-2xl font-black">{isCompany ? '4' : '2'}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                    {isCompany ? 'Trilhas' : 'Cursos'}
                  </p>
                </div>
                <div className="rounded-[1.6rem] bg-white p-4 text-center text-brand-700">
                  <p className="text-2xl font-black">{isCompany ? '18' : '1'}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                    {isCompany ? 'Talentos' : 'Certificado'}
                  </p>
                </div>
                <div className="rounded-[1.6rem] bg-white p-4 text-center text-brand-700">
                  <p className="text-2xl font-black">{isCompany ? '3' : '08h'}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                    {isCompany ? 'Parcerias' : 'Estudo'}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-[2rem] border border-white/15 bg-white/10 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-white/90">
                      {isCompany ? 'Pronto para apresentar' : 'Funciona offline'}
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      {isCompany
                        ? 'Mostre o potencial do app para instituicoes e empresas parceiras em poucos cliques.'
                        : 'Instale no celular e mantenha a apresentacao pronta para demonstracoes.'}
                    </p>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-gold" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
