import { LoaderFunctionArgs, useLoaderData, useRouteLoaderData } from "react-router-dom"
import { ProfilePic } from "../ProfilePic"
import { ConversationWithMessages, Recipient } from "@/types"
import ChatMessageHeader from "./ChatMessageHeader"
import ChatMessage from "./ChatMessageText"
import { getChatsById } from "@/api/conversation"

export async function loader({ params }: LoaderFunctionArgs) {
    return getChatsById(params.chatId!)
}

function getMessageAuthor(authorId: number, user: Recipient, recipient: Recipient) {
    return authorId === user.id
        ? { name: user.firstName + " " + user.lastName, isAuthor: true }
        : { name: recipient.firstName + " " + recipient.lastName, isAuthor: false }
}

export default function Chat() {
    const { messages, recipinet } = useLoaderData() as ConversationWithMessages
    const user = useRouteLoaderData("root") as Recipient


    return (
        <div className="w-full max-h-screen overflow-hidden">
            <div className="flex flex-col justify-between h-full overflow-y-hidden">
                <ChatHeader name={recipinet.firstName + " " + recipinet.lastName} />
                <div className="flex-1 px-6 flex flex-col-reverse py-2 overflow-y-auto no-scrollbar">
                    {/* just for strict mode -- remove it in production */}
                    {[...messages]
                        .reverse()
                        .map(({ authorId, id, text, createdAt }, idx, messages) => {
                            const nextMessage = idx + 1
                            // check to see if the author of current message and next are same
                            // so we can just return chat message text not the header
                            if (
                                messages[nextMessage] &&
                                authorId === messages[nextMessage].authorId
                            ) {
                                return <ChatMessage key={id} text={text} date={createdAt} />
                            }

                            return (
                                <ChatMessageHeader
                                    user={getMessageAuthor(authorId, user, recipinet)}
                                    key={id}
                                >
                                    <ChatMessage key={id} text={text} date={createdAt} />
                                </ChatMessageHeader>
                            )
                        })}
                </div>
                <div className="w-full h-20  p-4 bg-zinc-800">
                    <input
                        placeholder={`Write to ${recipinet.firstName} ${recipinet.lastName}`}
                        className=" 
                bg-zinc-900 w-full placeholder:capitalize focus:outline-none text-gray-200 placeholder:text-zinc-500 px-4 py-3 rounded-md"
                    />
                </div>
            </div>
        </div>
    )
}


function ChatHeader({ name }:{name: string}){
    return (
        <div
            className="w-full flex items-center bg-zinc-900 
            flex-start h-[64px] pl-6 gap-4"
        >
            <ProfilePic />
            <h5 className="text-lg text-gray-100">
                {name}
            </h5>
        </div>
    )
}