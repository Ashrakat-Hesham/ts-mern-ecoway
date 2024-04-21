import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import HomePage from './tsCode/Pages/HomePage'
import ProductPage from './tsCode/Pages/ProductPage'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/product/:product-slug', element: <ProductPage /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
