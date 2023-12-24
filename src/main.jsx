import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from"react-router-dom"
import { AuthProvider } from './AuthContext.jsx'
import { ProdutsProvider } from './ProdutsContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProdutsProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ProdutsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
