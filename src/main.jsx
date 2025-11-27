import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // <--- LIGNE AJOUTÉE

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* <--- ENVELOPPE ICI */}
      <App />
    </BrowserRouter> {/* <--- ET FERME ICI */}
  </React.StrictMode>,
)