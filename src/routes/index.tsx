import Chat from "@/components/chat/Chat";
import App, { HandleAuthError } from "@/pages/app";
import Conversation from "@/pages/conversation";
import Login from "@/pages/login";
import Register from "@/pages/register";
import { createBrowserRouter } from "react-router-dom";
import { loader as getConversations } from "@/pages/conversation";
import { loader as getRecipientChat } from "@/components/chat/Chat";
import axios from "axios";

async function getStatus() {
        const res = await axios.get("http://localhost:3000/api/auth/status", {
            withCredentials: true,
        })
        return res.data   
}


// function getMockedUser() {
//     return {
//         email: "jane@doe.com",
//         firstName: "jane",
//         lastName: "doe",
//         id: 3,
//     }
// }

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
                loader: getConversations,
                errorElement: <ErrorPlaceHolder />,
                children: [
                    {
                        path: ":chatId",
                        element: <Chat />,
                        loader: getRecipientChat,
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
