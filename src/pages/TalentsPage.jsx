import { MapPin, Paperclip, SearchCheck } from 'lucide-react'
import { assets } from '../config/app'
import { partnerBrands, talentProfile } from '../data/mockData'

export function TalentsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[2.2rem] border border-white/70 bg-white p-5 shadow-soft">
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-brand-700 text-lg font-black text-white">
            AD
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-xl font-black text-ink">{talentProfile.name}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {talentProfile.city}
              </span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-700">
                Disponivel para oportunidades
              </span>
            </div>
          </div>
        </div>

        <div className="mt-5 space-y-4">
          <div>
            <h2 className="text-sm font-semibold text-ink">Sobre mim</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {talentProfile.bio}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-ink">Competencias</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {talentProfile.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-brand-100 bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.6rem] bg-mist p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="inline-flex items-center gap-3">
                <div className="rounded-2xl bg-white p-3 text-brand-700 shadow-soft">
                  <Paperclip className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {talentProfile.resume}
                  </p>
                  <p className="text-xs text-slate-500">
                    {talentProfile.updatedAt}
                  </p>
                </div>
              </div>
              <a
                href={assets.courseMaterial}
                download
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-soft"
              >
                Baixar
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] bg-brand-900 p-5 text-white shadow-glow">
        <div className="flex items-center gap-3">
          <SearchCheck className="h-6 w-6 text-gold" />
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-white/70">
              Empresas parceiras
            </p>
            <h2 className="text-xl font-bold">Banco de Talentos ativo</h2>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {partnerBrands.map((brand) => (
            <div
              key={brand}
              className="rounded-[1.5rem] bg-white px-3 py-4 text-center text-sm font-bold text-brand-700"
            >
              {brand}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
