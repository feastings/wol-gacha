import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { AlertProvider } from '@context/AlertContext.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AlertProvider>
      <App />
    </AlertProvider>
  </StrictMode>,
)
