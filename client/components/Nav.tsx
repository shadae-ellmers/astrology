import { Link, useLocation } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'

function Nav() {
  const { pathname } = useLocation()

  const { logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    return logout()
  }

  const handleSignIn = () => {
    return loginWithRedirect()
  }

  const renderHomeLink = () => <Link to="/">Home</Link>

  return (
    <nav>
      <div className="nav-button">
        {pathname === '/' ? renderHomeLink() : renderHomeLink()}
      </div>
      <div className="nav-button">
        <Link to="/chart">Charts</Link>
      </div>
      <div className="nav-button">
        <Link to="info">Info</Link>
      </div>
      <IfAuthenticated>
        <button onClick={handleSignOut}>Sign Out</button>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button onClick={handleSignIn}>Sign In</button>
      </IfNotAuthenticated>
    </nav>
  )
}

export default Nav
