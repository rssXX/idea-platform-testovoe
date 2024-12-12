import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NuqsAdapter } from 'nuqs/adapters/react'
import {MainPage} from './pages'
import './utils/styles/global.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <NuqsAdapter>
          <MainPage />
      </NuqsAdapter>
  </StrictMode>,
)
