import { useEffect, useState } from 'react'
import { Download } from 'lucide-react'

export function InstallPromptButton({ className = '' }) {
  const [promptEvent, setPromptEvent] = useState(null)

  useEffect(() => {
    function handleBeforeInstallPrompt(event) {
      event.preventDefault()
      setPromptEvent(event)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      )
    }
  }, [])

  if (!promptEvent) {
    return null
  }

  async function handleInstall() {
    promptEvent.prompt()
    await promptEvent.userChoice
    setPromptEvent(null)
  }

  return (
    <button
      type="button"
      onClick={handleInstall}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-soft transition hover:-translate-y-0.5 ${className}`}
    >
      <Download className="h-4 w-4" />
      Instalar app
    </button>
  )
}
