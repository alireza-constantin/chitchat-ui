import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Login from "./pages/login"

import { createBrowserRouter, Navigate, RouterProvider} from "react-router-dom"
import Register from "./pages/register"
import App from "./pages/app"
import Chat from "./components/chat/Chat"
import { Toaster } from "react-hot-toast"

// import axios from "axios"
// async function getStatus() {
//     const res = await axios.get("http://localhost:3000/api/auth/status", {
//         withCredentials: true,
//     })
//     return res.data
// }

function getUserMock() {
    return {
        email: 'jane@doe.com',
        firstName: 'jane',
        lastName: 'doe',
    }
}



function ErrorHandling(){
  return <Navigate to='/login' replace={true} />
}

const router = createBrowserRouter([
    {
        path: "/",
        loader: getUserMock,
        errorElement: <ErrorHandling />,
        element: <App />,
        id: 'root',
        children: [
            {
                path: "/:chatId",
                element: <Chat />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Toaster />
        <RouterProvider router={router} />
    </React.StrictMode>
)
