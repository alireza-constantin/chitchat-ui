import { useAppDispatch, useAppSelector } from "@/app/hook"
import { selectConversationById } from "@/app/slices/conversations"
import type { AuthUser, Message } from "@/types"
import { useParams, useRouteLoaderData } from "react-router-dom"
import { ProfilePic } from "../shared/ProfilePic"
import ChatMessages from "./ChatMessages"
import SendMessageInput from "./SendMessageInput"
import { getFullName, isUserAuthor } from "@/utils/helpers"
import { socket } from "@/utils/socket"
import { useEffect } from "react"
import { addConversation } from "@/app/slices/messages"
import { toast } from "react-hot-toast"

export default function Chat() {
    const params = useParams() as { chatId: string }
    const user = useRouteLoaderData("root") as AuthUser
    const dispatch = useAppDispatch()

    const conversation = useAppSelector((state) => selectConversationById(state, params.chatId))

    useEffect(() => {
        socket.on("connect", () => console.log("connected"))
        socket.on("onMessage", (msg: Message) => {
            console.log(msg, conversation)

            if (params.chatId && msg.conversationId === Number(params.chatId)) {
                dispatch(addConversation(msg))
                return
            }
            toast.custom(
                <div className="px-4 py-2 bg-zinc-200 rounded-md w-[210px]">
                    <h2 className="text-center text-zinc-700 text-lg mb-2 font-semibold">{getFullName(msg.author)}</h2>
                    <p className="text-gray-500 text-sm">{msg.text}</p>
                </div>,
                {
                    duration: 10000,
                }
            )
        })

        return () => {
            socket.off("connect")
        }
    }, [])

    if (!conversation) {
        return <div>something went wrong</div>
    }

    const { creator, recipinet, creatorId } = conversation

    const recipientFullName = isUserAuthor(user.id, creatorId)
        ? getFullName(recipinet)
        : getFullName(creator)

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
