import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './pages/login'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/register'
import App from './pages/app'
import Chat from './components/chat/Chat'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/:chatId',
        element: <Chat />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
