import { Outlet, useLoaderData } from "react-router-dom"
import Sidebar from "../components/sidebar/Sidebar"
import { Conversation } from "@/types"
import { getAllUserConversations } from "@/api/conversation"

export async function loader(){
    return getAllUserConversations()
}


export default function Conversation() {
    const conversations = useLoaderData() as Conversation[]

    return (
        <>
            <div className="flex w-full">
                <Sidebar conversations={conversations} />
                <Outlet />
            </div>
        </>
    )
}
