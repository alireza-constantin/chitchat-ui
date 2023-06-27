import { Outlet, useLoaderData } from "react-router-dom"
import Sidebar from "../components/sidebar/Sidebar"
import axios from "axios"
import { Conversation } from "@/types"

export async function loader(){
    const res = await axios.get<Conversation>("http://localhost:3000/api/conversations", {
        withCredentials: true,
    })
    return res.data
}


export default function Conversation() {
    const conversations = useLoaderData() as Conversation[]

    console.log(conversations)

    return (
        <>
            <div className="flex w-full">
                <Sidebar conversations={conversations} />
                <Outlet />
            </div>
        </>
    )
}
