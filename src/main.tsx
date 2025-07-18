import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/navigation/App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain="dev-tfgyd3i2jqk0igxv.us.auth0.com"
    clientId="NZ5N1xnHOdgdVuXNPoBuNydMhg83Oe0p"
    authorizationParams={{
      redirect_uri: `${import.meta.env.VITE_WEB_ADDRESS}/authorization`,
      audience: "https://prestige-auth0-resource",
      scope: "openid profile email user-read-email user-read-private user-read-recently-played user-top-read user-read-currently-playing app-remote-control"
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
)