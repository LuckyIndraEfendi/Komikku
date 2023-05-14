import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StateProvider } from './context/StateContext'
import { AuthProvider } from './context/AuthContext.jsx'
import { SkeletonTheme } from 'react-loading-skeleton';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <SkeletonTheme color="#202020" highlightColor="#444">
        <StateProvider>
          <App />
        </StateProvider>
      </SkeletonTheme>
    </AuthProvider>
  </React.StrictMode>,
)
