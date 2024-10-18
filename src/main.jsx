import { StrictMode } from 'react'
import './index.css'
import router from './Routes/router.jsx'
import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>
      <Toaster />
    </AuthProvider>
  </StrictMode>,

)
