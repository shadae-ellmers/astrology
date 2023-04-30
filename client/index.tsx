import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'
import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="shadae-ellmers.au.auth0.com"
      clientId="QeBIW8rJqHFXzyOfGk7dsKNVQW2yfNGC"
      authorizationParams={{
        redirectUri: window.location.origin,
        audience: 'https://astrology/api',
        scope: 'read:current_user update:current_user_metadata',
      }}
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>
  )
})
