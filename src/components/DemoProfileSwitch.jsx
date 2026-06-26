import { demoRoleMeta } from '../data/mockData'
import { useDemoRole } from '../hooks/useDemoState'

export function DemoProfileSwitch({ compact = false }) {
  const { role, setRole } = useDemoRole()

  return (
    <div
      className={`rounded-[1.6rem] border border-white/70 bg-white/90 p-2 shadow-soft ${
        compact ? '' : 'space-y-2'
      }`}
    >
      {!compact ? (
        <div className="px-2 pt-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
            Modo demo
          </p>
          <p className="text-sm text-slate-500">
            Troque de perfil sem sair da apresentacao.
          </p>
        </div>
      ) : null}
      <div className="grid grid-cols-2 gap-2">
        {['aluno', 'empresa'].map((profileId) => {
          const item = demoRoleMeta[profileId]
          const active = role === profileId

          return (
            <button
              key={profileId}
              type="button"
              onClick={() => setRole(profileId)}
              className={`rounded-[1.25rem] px-3 py-3 text-left transition ${
                active
                  ? 'bg-brand-700 text-white shadow-glow'
                  : 'bg-mist text-ink hover:bg-brand-50'
              }`}
            >
              <p className="text-sm font-semibold">{item.shortLabel}</p>
              <p
                className={`mt-1 text-xs leading-5 ${
                  active ? 'text-white/75' : 'text-slate-500'
                }`}
              >
                {item.switchDescription}
              </p>
            </button>
          )
        })}
      </div>
    </div>
  )
}
