import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StyleGlobal } from './global/style'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyleGlobal />
    <App />
  </React.StrictMode>,
)
