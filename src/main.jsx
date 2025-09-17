import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initGA } from './utils/analytics.js'

// Initialize Google Analytics
if (typeof window !== 'undefined') {
  initGA()
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
