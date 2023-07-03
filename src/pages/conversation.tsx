import { Outlet } from "react-router-dom"
import Sidebar from "../components/sidebar/Sidebar"
import { Conversation } from "@/types"

export default function Conversation() {

    return (
        <>
            <div className="flex w-full">
                <Sidebar  />
                <Outlet />
            </div>
        </>
    )
}
