import React from 'react'
import ReactDOM from 'react-dom/client'
//importa App.jsx para poder ahi contuir el login como si fuera una etiqueta
import App from './App'

//en el index.html empieza a consntruir en el div con id root
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
