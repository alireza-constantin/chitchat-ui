import { Link } from "react-router-dom"
import { ProfilePic } from "../ProfilePic"

type Profile = {
    exp : boolean,
    userName: string,
    lastMessage: string,
    id: number
}


export function Profile({ exp, lastMessage, userName, id }: Profile) {
    return (
        <Link to={`/${id}`} className="flex gap-4 items-center bg-zinc-900 py-3 h-16 px-5 justify-start">
            <ProfilePic />
            {exp && (
                <div className="w-3/4 transition-all duration-1000 animate-[unhide_300ms_ease-in-out_forwards]">
                    <p className="text-gray-100 text-sm font-semibold pb-1">{userName}</p>
                    <p className="text-xs text-gray-300 truncate">{lastMessage}</p>
                </div>
            )}
        </Link>
    )
}


