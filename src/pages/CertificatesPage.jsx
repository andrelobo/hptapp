import { useState } from 'react'
import { CheckCircle2, Download, QrCode, ShieldCheck } from 'lucide-react'
import { SectionTitle } from '../components/SectionTitle'
import { assets } from '../config/app'
import { certificates } from '../data/mockData'
import { useDemoRole } from '../hooks/useDemoState'

export function CertificatesPage() {
  const { role } = useDemoRole()
  const [selectedCertificateId, setSelectedCertificateId] = useState(
    certificates[0]?.id ?? null
  )
  const selectedCertificate =
    certificates.find((item) => item.id === selectedCertificateId) ??
    certificates[0]
  const verifiedCount = certificates.filter((item) => item.verified).length
  const isCompany = role === 'empresa'

  return (
    <div className="space-y-6">
      <SectionTitle
        eyebrow="Certificacao"
        title={
          isCompany ? 'Certificados e comprovacao' : 'Meus Certificados'
        }
      />

      <section className="rounded-[2rem] bg-brand-900 p-5 text-white shadow-glow">
        <div className="grid grid-cols-3 gap-3">
          <article className="rounded-[1.6rem] bg-white/10 p-4 text-center">
            <p className="text-2xl font-black">{verifiedCount}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">
              Validos
            </p>
          </article>
          <article className="rounded-[1.6rem] bg-white/10 p-4 text-center">
            <p className="text-2xl font-black">{certificates.length}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">
              Emissao
            </p>
          </article>
          <article className="rounded-[1.6rem] bg-white/10 p-4 text-center">
            <p className="text-2xl font-black">QR</p>
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">
              Verificacao
            </p>
          </article>
        </div>
        <div className="mt-4 rounded-[1.6rem] border border-white/10 bg-white/10 p-4">
          <p className="text-sm font-semibold text-white/90">
            {isCompany
              ? 'Use esta tela para demonstrar confianca, autenticidade e conclusao de trilhas.'
              : 'Seus certificados digitais podem ser baixados e validados durante a apresentacao.'}
          </p>
        </div>
      </section>

      <div className="space-y-4">
        {certificates.map((item) => (
          <article
            key={item.id}
            className={`rounded-[2rem] border bg-white p-5 shadow-soft transition ${
              selectedCertificateId === item.id
                ? 'border-brand-300 ring-2 ring-brand-100'
                : 'border-white/70'
            }`}
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
                  <span
                    className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      item.verified
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {item.verified ? 'Autenticado' : 'Pendente de emissao'}
                  </span>
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

            <div className="mt-4 flex flex-wrap gap-3">
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
                onClick={() => setSelectedCertificateId(item.id)}
                className="rounded-full border border-brand-200 px-4 py-3 text-sm font-semibold text-brand-700"
              >
                {selectedCertificateId === item.id
                  ? 'Detalhe exibido'
                  : 'Verificar autenticidade'}
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedCertificate ? (
        <section className="rounded-[2rem] border border-white/70 bg-white p-5 shadow-soft">
          <div className="flex items-start gap-4">
            <div className="rounded-[1.4rem] bg-brand-50 p-4 text-brand-700">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-500">
                Verificacao em destaque
              </p>
              <h3 className="mt-2 text-xl font-bold text-ink">
                {selectedCertificate.course}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {selectedCertificate.verified
                  ? 'Documento validado para demonstração com QR Code, assinatura e carga horária registrada.'
                  : 'Este certificado ainda está sinalizado como pendente, o que ajuda a demonstrar a jornada entre progresso e emissão final.'}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700">
                  Aluno: {selectedCertificate.student}
                </span>
                <span className="rounded-full bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700">
                  Carga: {selectedCertificate.hours}
                </span>
                <span className="rounded-full bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700">
                  Data: {selectedCertificate.date}
                </span>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                <CheckCircle2 className="h-4 w-4" />
                QR Code pronto para conferência visual durante a apresentação
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  )
}
