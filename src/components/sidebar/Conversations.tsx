import { useAppDispatch, useAppSelector } from "@/app/hook"
import { selectAllConversations, fetchUserConversations } from "@/app/slices/conversations"
import { Recipient } from "@/types"
import { useEffect } from "react"
import { useRouteLoaderData } from "react-router-dom"
import { Profile } from "./Profile"


function isUserAuthor(userId: number, authorId: number): boolean {
    return userId === authorId
}

function getFullName(user: Recipient) {
    return `${user.firstName} ${user.lastName}`
}

export function Conversations({ expanded }: { expanded: boolean }) {
    const user = useRouteLoaderData("root") as Recipient

    const dispatch = useAppDispatch()

    const conversations = useAppSelector(selectAllConversations)

    console.log("conversations:", conversations)

    useEffect(() => {
        dispatch(fetchUserConversations())
    }, [])

    return (
        <div className="">
            <ul className="flex flex-col gap-1">
                {conversations &&
                    conversations.map(({ id, creator, recipinet }) => (
                        <Profile
                            key={id}
                            id={id}
                            lastMessage="last message"
                            userName={
                                isUserAuthor(user.id, creator.id)
                                    ? getFullName(recipinet)
                                    : getFullName(creator)
                            }
                            exp={expanded}
                        />
                    ))}
            </ul>
        </div>
    )
}
