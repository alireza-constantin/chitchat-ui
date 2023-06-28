import { LoaderFunctionArgs, useLoaderData, useRouteLoaderData } from "react-router-dom"
import { ProfilePic } from "../ProfilePic"
import axios from "axios"
import { formatDistance, formatRelative } from "date-fns"
import { ConversationWithMessages, Recipient } from "@/types"
import clsx from "clsx"

export async function loader({ params }: LoaderFunctionArgs) {
    const res = await axios.get<ConversationWithMessages>(
        `http://localhost:3000/api/conversations/${params.chatId}`,
        {
            withCredentials: true,
        }
    )
    return res.data
}

function getMessageAuthor(authorId: number, user1: Recipient, user2: Recipient) {
    return authorId === user1.id
        ? { name: user1.firstName + " " + user1.lastName, author: true }
        : { name: user2.firstName + " " + user2.lastName, author: false }
}

export default function Chat() {
    const data = useLoaderData() as ConversationWithMessages
    const user = useRouteLoaderData("root") as Recipient

    console.log(data.messages)

    return (
        <div className="w-full max-h-screen overflow-hidden">
            <div className="flex flex-col justify-between h-full overflow-y-hidden">
                <div
                    className="w-full flex items-center bg-zinc-900 
            flex-start h-[64px] pl-6 gap-4"
                >
                    <ProfilePic />
                    <h5 className="text-lg text-gray-100">
                        {`${data.recipinet.firstName} ${data.recipinet.lastName}`}
                    </h5>
                </div>
                {/* chat screen */}
                <div className="flex-1 px-6 flex flex-col-reverse py-2 overflow-y-auto no-scrollbar">
                    {/* just for strict mode -- remove it in production */}
                    {[...data.messages]
                        .reverse()
                        .map(({ authorId, id, text, createdAt }, idx, messages) => {
                            const nextMessage = idx + 1
                            if (
                                messages[nextMessage] &&
                                authorId === messages[nextMessage].authorId
                            ) {
                                return <ChatMessage key={id} text={text} date={createdAt} />
                            }

                            return (
                                <ChatMessageHeader
                                    author={getMessageAuthor(authorId, user, data.recipinet)}
                                    key={id}
                                >
                                    <ChatMessage key={id} text={text} date={createdAt} />
                                </ChatMessageHeader>
                            )
                        })}
                </div>
                <div className="w-full h-20  p-4 bg-zinc-800">
                    <input
                        placeholder={`Write to ${data.recipinet.firstName} ${data.recipinet.lastName}`}
                        className=" 
                bg-zinc-900 w-full placeholder:capitalize focus:outline-none text-gray-200 placeholder:text-zinc-500 px-4 py-3 rounded-md"
                    />
                </div>
            </div>
        </div>
    )
}

function ChatMessage({ text, date }: { text: string; date: string }) {
    // console.log("chat message component", author)
    const formatedDate = formatDistance(new Date(date), new Date(), { addSuffix: true })

    return (
        <div className="text-gray-100 ml-6 chat-bubble chat-bubble-primary mb-1">
            <div className="text-sm">{text}</div>
            <p className="sm:text-[10px] text-[8px] pt-[1px]  text-right opacity-50">
                {formatedDate}
            </p>
        </div>
    )
}

type ChatMessageHeaderProps = {
    author: { name: string; author: boolean }
    children: React.ReactNode
}

function ChatMessageHeader({ author, children }: ChatMessageHeaderProps) {
    return (
        <div>
            <div className="flex gap-2 items-center mb-2 mt-4">
                <div className=" avatar">
                    <div
                        className={clsx(
                            "w-8 h-8 rounded-full",
                            author.author ? "bg-sky-500" : "bg-amber-400"
                        )}
                    ></div>
                </div>
                <div>
                    <div className="flex gap-2 items-center">
                        <p
                            className={clsx(
                                "font-medium text-lg capitalize",
                                author.author ? "text-sky-400" : "text-amber-400"
                            )}
                        >
                            {author.name}
                        </p>
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}
