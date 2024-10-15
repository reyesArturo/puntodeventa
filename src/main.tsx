import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/app.css'
import Login from './views/login'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
