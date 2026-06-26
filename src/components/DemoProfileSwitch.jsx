import { demoRoleMeta } from '../data/mockData'
import { useDemoRole } from '../hooks/useDemoState'

export function DemoProfileSwitch({ compact = false }) {
  const { role, setRole } = useDemoRole()

  return (
    <div
      className={`rounded-[1.6rem] border border-white/15 bg-white/10 p-2 shadow-soft backdrop-blur ${
        compact ? '' : 'space-y-2'
      }`}
    >
      {!compact ? (
        <div className="px-2 pt-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-100/80">
            Modo demo
          </p>
          <p className="text-sm text-brand-100/70">
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
                  : 'bg-white/10 text-white hover:bg-white/15'
              }`}
            >
              <p className="text-sm font-semibold">{item.shortLabel}</p>
              <p
                className={`mt-1 text-xs leading-5 ${
                  active ? 'text-white/75' : 'text-brand-100/70'
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
