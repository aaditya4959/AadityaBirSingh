import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import './index.css'
import Header from './components/Header/Header'
import Layout from './layout'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>
    
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
