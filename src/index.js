import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import AuthProvider from './components/context/auth'
import reportWebVitals from './reportWebVitals'
// import UserProvider from './components/context/user'
import { Chart, registerables } from 'chart.js'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { clientId } from './Constants'

Chart.register(...registerables)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
    <AuthProvider>
      {/* <UserProvider> */}
        <App />
      {/* </UserProvider> */}
    </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
