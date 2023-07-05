import { sendMessage } from "@/api/conversation";
import type { FormEvent } from "react";

export default function SendMessageInput({ conversationId, name }: { conversationId: string; name: string }) {
    async function sendMessageHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const messageInput = e.currentTarget.elements.namedItem("message") as HTMLInputElement
        try {
            await sendMessage({
                conversationId: Number(conversationId),
                message: messageInput.value,
            })
        } catch (error) {
            console.log(error)
        }
        messageInput.value = ""
    }

    return (
        <div className="w-full h-20  p-4 bg-zinc-800">
            <form onSubmit={sendMessageHandler}>
                <input
                    name="message"
                    placeholder={`Write to ${name}`}
                    className="
                bg-zinc-900 w-full placeholder:capitalize focus:outline-none text-gray-200 placeholder:text-zinc-500 px-4 py-3 rounded-md"
                />
            </form>
        </div>
    )
}
