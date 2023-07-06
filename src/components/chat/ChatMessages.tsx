import { useAppDispatch, useAppSelector } from "@/app/hook"
import { fetchMessagesById } from "@/app/slices/messages"
import { useEffect } from "react"
import ChatMessageHeader from "./ChatMessageHeader"
import ChatMessage from "./ChatMessageText"
import { getFullName, isUserAuthor } from "@/utils/helpers"

type ChatMessageProps = {
    conversationId: string
    authUserId: number
}

export default function ChatMessages({ conversationId, authUserId }: ChatMessageProps) {
    const dispatch = useAppDispatch()
    const messages = useAppSelector((state) => state.messages)

    useEffect(() => {
        dispatch(fetchMessagesById(conversationId))
    }, [dispatch, conversationId])

    return (
        <div className="flex-1 px-6 flex flex-col-reverse bg-primary py-2 overflow-y-auto no-scrollbar">
            {[...messages]
                .reverse()
                .map(({ authorId, id, text, createdAt, author }, idx, messages) => {
                    const nextMessage = idx + 1
                    // check to see if the author of current message and next are same
                    // so we can just return chat message text not the header
                    if (messages[nextMessage] && authorId === messages[nextMessage].authorId) {
                        return <ChatMessage key={id} text={text} date={createdAt} />
                    }

                    return (
                        <ChatMessageHeader
                            user={{
                                name: getFullName(author),
                                isAuthor: isUserAuthor(authUserId, authorId),
                            }}
                            key={id}
                        >
                            <ChatMessage key={id} text={text} date={createdAt} />
                        </ChatMessageHeader>
                    )
                })}
        </div>
    )
}
