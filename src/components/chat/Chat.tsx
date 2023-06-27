import { LoaderFunctionArgs, useLoaderData, useRouteLoaderData } from "react-router-dom"
import { ProfilePic } from "../ProfilePic"
import axios from "axios"
import { ConversationWithMessages, Recipient } from "@/types"

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
    return authorId === user1.id ? user1 : user2
}

export default function Chat() {
    const data = useLoaderData() as ConversationWithMessages
    const user = useRouteLoaderData("root") as Recipient


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
                <div className="flex-1 px-6 flex flex-col-reverse gap-2 py-2 overflow-y-auto no-scrollbar">
                    {/* just for strict mode -- remove it in production */}
                    {[...data.messages].reverse().map(({ authorId, id, text }) => {
                        console.log(text)
                        return (
                            <ChatMessage
                                author={getMessageAuthor(authorId, user, data.recipinet)}
                                text={text}
                                key={id}
                            />
                        )
                    })}
                </div>
                <div className="w-full h-20  p-4 bg-zinc-800">
                    <input
                        placeholder="Write to Albert Einsten"
                        className=" 
                bg-zinc-900 w-full focus:outline-none text-gray-200 placeholder:text-zinc-500 px-4 py-3 rounded-md"
                    />
                </div>
            </div>
        </div>
    )
}

function ChatMessage({ text, author }: { text: string; author: Recipient }) {
    // console.log("chat message component", author)

    return (
        <div className="flex gap-2 mb-2">
            <div className=" avatar">
                <div className="w-8 h-8 rounded-full bg-pink-500"></div>
            </div>
            <div>
                <div className="flex gap-2 items-center">
                    <p className="text-blue-500 font-medium text-base">{`${author.firstName} ${author.lastName}`}</p>
                    <time className="text-xs opacity-50">Today at 12:45</time>
                </div>
                <div className="text-sm text-gray-100">
                    <div>{text}</div>
                </div>
            </div>
        </div>
    )
}
