import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import { PhoneFrame } from './components/PhoneFrame'
import { KoperPage } from './pages/KoperPage'
import './styles.css'

// Double variant — Koper game served at telkomsel3double on port 5287.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <PhoneFrame>
        <KoperPage />
      </PhoneFrame>
    </MotionConfig>
  </StrictMode>,
)
