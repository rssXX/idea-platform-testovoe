import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {MainPage} from './pages'
import './utils/styles/global.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <MainPage />
  </StrictMode>,
)
