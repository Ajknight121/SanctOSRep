import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { VideoPlayerProvider } from './VideoContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <VideoPlayerProvider>
      <App />
    </VideoPlayerProvider>
  </StrictMode>,
)
