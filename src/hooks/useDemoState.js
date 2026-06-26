import { useEffect, useMemo, useState } from 'react'
import {
  companyCommunityHighlights,
  companyDashboardStats,
  companyProfile,
  companyTalentSpotlight,
  dashboardStats,
  demoRoleMeta
} from '../data/mockData'

const ROLE_KEY = 'hp-role'
const SESSION_KEY = 'hp-demo-session'
const COMPLETED_LESSONS_KEY = 'hp-completed-lessons'
const ROLE_EVENT = 'hp-demo-role-change'
const SESSION_EVENT = 'hp-demo-session-change'
const LESSON_EVENT = 'hp-demo-lessons-change'

function readJson(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

export function readRole() {
  if (typeof window === 'undefined') {
    return 'aluno'
  }

  return window.localStorage.getItem(ROLE_KEY) || 'aluno'
}

export function writeRole(role) {
  window.localStorage.setItem(ROLE_KEY, role)
  window.dispatchEvent(new CustomEvent(ROLE_EVENT, { detail: role }))
}

export function clearRole() {
  window.localStorage.removeItem(ROLE_KEY)
  window.dispatchEvent(new CustomEvent(ROLE_EVENT, { detail: 'aluno' }))
}

export function readHasSession() {
  if (typeof window === 'undefined') {
    return false
  }

  return (
    window.localStorage.getItem(SESSION_KEY) === '1' ||
    Boolean(window.localStorage.getItem(ROLE_KEY))
  )
}

export function writeSessionState(active) {
  if (active) {
    window.localStorage.setItem(SESSION_KEY, '1')
  } else {
    window.localStorage.removeItem(SESSION_KEY)
  }

  window.dispatchEvent(new CustomEvent(SESSION_EVENT, { detail: active }))
}

export function startDemoSession(role) {
  writeRole(role)
  writeSessionState(true)
}

export function readCompletedLessons() {
  if (typeof window === 'undefined') {
    return []
  }

  return readJson(COMPLETED_LESSONS_KEY, [])
}

export function writeCompletedLessons(lessons) {
  window.localStorage.setItem(COMPLETED_LESSONS_KEY, JSON.stringify(lessons))
  window.dispatchEvent(new CustomEvent(LESSON_EVENT, { detail: lessons }))
}

export function clearCompletedLessons() {
  window.localStorage.removeItem(COMPLETED_LESSONS_KEY)
  window.dispatchEvent(new CustomEvent(LESSON_EVENT, { detail: [] }))
}

export function resetDemoSession() {
  writeSessionState(false)
  clearRole()
  clearCompletedLessons()
}

export function useDemoSession() {
  const [hasSession, setHasSession] = useState(readHasSession)

  useEffect(() => {
    function syncSession() {
      setHasSession(readHasSession())
    }

    window.addEventListener('storage', syncSession)
    window.addEventListener(SESSION_EVENT, syncSession)
    window.addEventListener(ROLE_EVENT, syncSession)

    return () => {
      window.removeEventListener('storage', syncSession)
      window.removeEventListener(SESSION_EVENT, syncSession)
      window.removeEventListener(ROLE_EVENT, syncSession)
    }
  }, [])

  return {
    hasSession,
    startSession: startDemoSession,
    clearSession: resetDemoSession
  }
}

export function useDemoRole() {
  const [role, setRole] = useState(readRole)

  useEffect(() => {
    function syncRole() {
      setRole(readRole())
    }

    window.addEventListener('storage', syncRole)
    window.addEventListener(ROLE_EVENT, syncRole)

    return () => {
      window.removeEventListener('storage', syncRole)
      window.removeEventListener(ROLE_EVENT, syncRole)
    }
  }, [])

  const roleMeta = demoRoleMeta[role] ?? demoRoleMeta.aluno

  return {
    role,
    roleMeta,
    setRole: writeRole
  }
}

export function useCompletedLessons() {
  const [completedLessons, setCompletedLessons] = useState(readCompletedLessons)

  useEffect(() => {
    function syncLessons() {
      setCompletedLessons(readCompletedLessons())
    }

    window.addEventListener('storage', syncLessons)
    window.addEventListener(LESSON_EVENT, syncLessons)

    return () => {
      window.removeEventListener('storage', syncLessons)
      window.removeEventListener(LESSON_EVENT, syncLessons)
    }
  }, [])

  function toggleLesson(lessonId) {
    const next = completedLessons.includes(lessonId)
      ? completedLessons.filter((item) => item !== lessonId)
      : [...completedLessons, lessonId]

    writeCompletedLessons(next)
    setCompletedLessons(next)
  }

  return {
    completedLessons,
    toggleLesson
  }
}

export function useDashboardViewModel() {
  const { role, roleMeta } = useDemoRole()
  const { completedLessons } = useCompletedLessons()

  return useMemo(() => {
    if (role === 'empresa') {
      return {
        role,
        roleMeta,
        stats: companyDashboardStats,
        profileCardTitle: 'Frente corporativa',
        profileCardBody:
          'Acompanhe talentos, trilhas indicadas e oportunidades de parceria com a comunidade.',
        communityHighlights: companyCommunityHighlights,
        companyProfile,
        companyTalentSpotlight
      }
    }

    return {
      role,
      roleMeta,
      stats: dashboardStats(completedLessons.length),
      profileCardTitle: 'Minha jornada',
      profileCardBody:
        'Cursos, progresso, certificado e comunidade em uma experiencia mobile-first.',
      communityHighlights: companyCommunityHighlights,
      companyProfile,
      companyTalentSpotlight
    }
  }, [completedLessons.length, role, roleMeta])
}
