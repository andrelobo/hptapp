import { CalendarDays, Megaphone, Sparkles } from 'lucide-react'
import { communityFeed } from '../data/mockData'
import { useDemoRole } from '../hooks/useDemoState'

const iconByType = {
  Aviso: Megaphone,
  Oportunidade: Sparkles,
  Evento: CalendarDays
}

export function CommunityPage() {
  const { role } = useDemoRole()
  const isCompany = role === 'empresa'

  return (
    <div className="space-y-6">
      <section className="rounded-[2.2rem] bg-brand-700 p-5 text-white shadow-glow">
        <p className="text-sm uppercase tracking-[0.24em] text-white/70">
          Comunidade
        </p>
        <h1 className="mt-2 text-3xl font-black">
          {isCompany ? 'Parcerias e oportunidades' : 'Conecte-se com a rede'}
        </h1>
        <p className="mt-3 text-sm leading-7 text-white/80">
          {isCompany
            ? 'Acompanhe vagas, eventos e movimentacoes da comunidade para fortalecer a estrategia de inclusao da empresa.'
            : 'Compartilhe experiencias, acompanhe avisos e descubra oportunidades ligadas a inclusao no comercio.'}
        </p>
      </section>

      <div className="space-y-4">
        {communityFeed.map((item) => {
          const Icon = iconByType[item.type]

          return (
            <article
              key={item.id}
              className="rounded-[1.8rem] border border-white/70 bg-white p-5 shadow-soft"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-brand-50 p-3 text-brand-700">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                    {item.type}
                  </span>
                  <h2 className="mt-3 text-lg font-bold text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
