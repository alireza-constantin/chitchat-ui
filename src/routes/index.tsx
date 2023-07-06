import Chat from "@/components/chat/Chat";
import App, { HandleAuthError } from "@/pages/app";
import Conversation from "@/pages/conversation";
import Login from "@/pages/login";
import Register from "@/pages/register";
import { createBrowserRouter, redirect } from "react-router-dom";
import axios from "axios";

async function getStatus() {
        const res = await axios.get("http://localhost:3000/api/auth/status", {
            withCredentials: true,
        })

        if(res.status !== 200) {
            return redirect('/login')
        }

        return res.data   
}


function ErrorPlaceHolder(){
    return <div>Error: something went wrong please try again</div>
}


export const router = createBrowserRouter([
    {
        id: "root",
        loader: getStatus,
        element: <App />,
        errorElement: <HandleAuthError />,
        children: [
            {
                path: "/",
                element: <Conversation />,
                errorElement: <ErrorPlaceHolder />,
                children: [
                    {
                        path: ":chatId",
                        element: <Chat />,
                        // loader: getRecipientChat,
                        errorElement: <ErrorPlaceHolder />,
                    },
                ],
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
