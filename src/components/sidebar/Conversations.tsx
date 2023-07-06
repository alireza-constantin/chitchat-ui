import { useAppDispatch, useAppSelector } from "@/app/hook"
import { selectAllConversations, fetchUserConversations } from "@/app/slices/conversations"
import type { AuthUser } from "@/types"
import { useEffect } from "react"
import { useRouteLoaderData } from "react-router-dom"
import { Profile } from "./Profile"
import { isUserAuthor, getFullName } from "@/utils/helpers"

export function Conversations({ expanded }: { expanded: boolean }) {
    const user = useRouteLoaderData("root") as AuthUser

    const dispatch = useAppDispatch()

    const conversations = useAppSelector(selectAllConversations)

    useEffect(() => {
        dispatch(fetchUserConversations())
    }, [])

    return (
        <div>
            <ul className="flex flex-col gap-[2px]">
                {conversations &&
                    conversations.map(({ id, creator, recipinet, creatorId }) => (
                        <Profile
                            key={id}
                            id={id}
                            lastMessage="last message"
                            userName={
                                isUserAuthor(user.id, creatorId)
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
