import { Navigate, useLocation } from 'react-router-dom'
import { routes } from '../config/app'
import { useDemoSession } from '../hooks/useDemoState'

export function RequireDemoSession({ children }) {
  const location = useLocation()
  const { hasSession } = useDemoSession()

  if (!hasSession) {
    return (
      <Navigate
        to={routes.login}
        replace
        state={{ from: location }}
      />
    )
  }

  return children
}
