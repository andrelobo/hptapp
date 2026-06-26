export const routes = Object.freeze({
  welcome: '/',
  presentation: '/apresentacao',
  login: '/login',
  signup: '/login?mode=signup',
  dashboard: '/dashboard',
  courses: '/cursos',
  coursePattern: '/cursos/:id',
  lessonPattern: '/aula/:id',
  certificates: '/certificados',
  talents: '/talentos',
  community: '/comunidade',
  profile: '/perfil',
  course: (id) => `/cursos/${id}`,
  lesson: (id) => `/aula/${id}`
})

export const assets = Object.freeze({
  brandMark: `${import.meta.env.BASE_URL}assets/brand-mark.png`,
  courseMaterial: `${import.meta.env.BASE_URL}assets/course-material.pdf`
})

export const routerBasename =
  import.meta.env.BASE_URL === '/'
    ? '/'
    : import.meta.env.BASE_URL.replace(/\/$/, '')
