import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { NavMobile } from './components/NavMobile.tsx'
import { routes } from '@/routes/index.tsx'

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="w-full min-h-screen bg-slate-200 relative">
      <NavMobile />
      <div className="w-full">
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>,
)
