import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/bricolage-grotesque'
import '@fontsource-variable/nunito'
import './styles/global.css'
import EventosPage from './components/EventosPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EventosPage />
  </StrictMode>,
)
