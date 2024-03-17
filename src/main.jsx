import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const reactRoot = document.getElementById('root');

ReactDOM.createRoot(reactRoot).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
