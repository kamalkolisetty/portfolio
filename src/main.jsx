import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fontsource/outfit"
import "@fontsource/roboto"
import { ResumeProvider } from './components/Hero/ResumeContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <ResumeProvider>
      <App />
    </ResumeProvider>
  </StrictMode>,
)
 