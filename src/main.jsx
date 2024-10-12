import { StrictMode } from 'react'
import './index.css'
import router from './Routes/router.jsx'
import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
