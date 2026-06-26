import { Download, QrCode } from 'lucide-react'
import { SectionTitle } from '../components/SectionTitle'
import { assets } from '../config/app'
import { certificates } from '../data/mockData'

export function CertificatesPage() {
  return (
    <div className="space-y-6">
      <SectionTitle eyebrow="Certificacao" title="Meus Certificados" />

      <div className="space-y-4">
        {certificates.map((item) => (
          <article
            key={item.id}
            className="rounded-[2rem] border border-white/70 bg-white p-5 shadow-soft"
          >
            <div className="rounded-[1.6rem] border border-[#f3d7a2] bg-[#fffaf1] p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-500">
                    Heberton Pinheiro
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-gold">
                    {item.title}
                  </h2>
                </div>
                <img
                  src={assets.brandMark}
                  alt=""
                  className="h-12 w-12 rounded-2xl bg-brand-700 p-1"
                />
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Certificamos que <strong>{item.student}</strong> concluiu o
                curso <strong>{item.course}</strong> com carga horaria de{' '}
                <strong>{item.hours}</strong>.
              </p>
              <div className="mt-4 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-ink">{item.date}</p>
                  <p className="text-xs text-slate-500">Manaus, AM</p>
                </div>
                <div className="rounded-2xl border border-brand-100 bg-white p-3 text-brand-700">
                  <QrCode className="h-10 w-10" />
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-3">
              <a
                href={assets.courseMaterial}
                download
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-700 px-4 py-3 text-sm font-semibold text-white"
              >
                <Download className="h-4 w-4" />
                Baixar PDF
              </a>
              <button
                type="button"
                className="rounded-full border border-brand-200 px-4 py-3 text-sm font-semibold text-brand-700"
              >
                Verificar autenticidade
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
