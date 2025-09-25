//Second file that react read/run.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      {/*Third file that react will read/run ---> App.tsx*/}
    <App />
  </StrictMode>,
)
