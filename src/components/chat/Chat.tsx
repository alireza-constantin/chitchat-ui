import {  useAppSelector } from "@/app/hook"
import { selectConversationById } from "@/app/slices/conversations"
import type { AuthUser } from "@/types"
import { useParams, useRouteLoaderData } from "react-router-dom"
import { ProfilePic } from "../shared/ProfilePic"
import ChatMessages from "./ChatMessages"
import SendMessageInput from "./SendMessageInput"
import { getFullName, isUserAuthor } from "@/utils/helpers"


export default function Chat() {
    const params = useParams() as { chatId: string }
    const user = useRouteLoaderData("root") as AuthUser

    const conversation = useAppSelector((state) => selectConversationById(state, params.chatId))

    if (!conversation) {
        return <div>something went wrong</div>
    }

    const { creator, recipinet, creatorId } = conversation

    const recipientFullName = isUserAuthor(user.id, creatorId)
        ? getFullName(recipinet)
        : getFullName(creator)

    // useEffect(() => {
    //     socket.on('connect', () => console.log('connected'))
    //     socket.on('onMessage', (msg: Message) => {
    //         console.log(msg)
    //         addToMessages(msg)
    //     })

    //     return () => {
    //         socket.off('connect')
    //     }
    // }, [])    console.log(recipientFullName)

    return (
        <div className="w-full max-h-screen overflow-hidden">
            <div className="flex flex-col justify-between h-full overflow-y-hidden">
                <ChatHeader name={recipientFullName} />
                <ChatMessages authUserId={user.id} conversationId={params.chatId} />
                <SendMessageInput conversationId={params.chatId} name={recipientFullName} />
            </div>
        </div>
    )
}

function ChatHeader({ name }: { name: string }) {
    return (
        <div
            className="w-full flex items-center bg-zinc-900
                    flex-start h-[64px] pl-6 gap-4"
        >
            <ProfilePic />
            <h5 className="text-lg text-gray-100">{name}</h5>
        </div>
    )
}
