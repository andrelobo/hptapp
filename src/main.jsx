import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from 'react-router-dom'
import { registerSW } from 'virtual:pwa-register'
import { RequireDemoSession } from './components/RequireDemoSession'
import { routerBasename, routes } from './config/app'
import { AppShell } from './layouts/AppShell'
import { CommunityPage } from './pages/CommunityPage'
import { CertificatesPage } from './pages/CertificatesPage'
import { CourseDetailPage } from './pages/CourseDetailPage'
import { CoursesPage } from './pages/CoursesPage'
import { DashboardPage } from './pages/DashboardPage'
import { HomePage } from './pages/HomePage'
import { LessonPage } from './pages/LessonPage'
import { LoginPage } from './pages/LoginPage'
import { ProfilePage } from './pages/ProfilePage'
import { TalentsPage } from './pages/TalentsPage'
import { WelcomePage } from './pages/WelcomePage'
import './styles.css'

registerSW({ immediate: true })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={routerBasename}>
      <Routes>
        <Route path={routes.welcome} element={<WelcomePage />} />
        <Route path={routes.presentation} element={<HomePage />} />
        <Route path={routes.login} element={<LoginPage />} />

        <Route
          element={
            <RequireDemoSession>
              <AppShell />
            </RequireDemoSession>
          }
        >
          <Route path={routes.dashboard} element={<DashboardPage />} />
          <Route path={routes.courses} element={<CoursesPage />} />
          <Route path={routes.coursePattern} element={<CourseDetailPage />} />
          <Route path={routes.lessonPattern} element={<LessonPage />} />
          <Route
            path={routes.certificates}
            element={<CertificatesPage />}
          />
          <Route path={routes.talents} element={<TalentsPage />} />
          <Route path={routes.community} element={<CommunityPage />} />
          <Route path={routes.profile} element={<ProfilePage />} />
        </Route>

        <Route path="*" element={<Navigate to={routes.welcome} replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
