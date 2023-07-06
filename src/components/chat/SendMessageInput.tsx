import { sendMessage } from "@/api/conversation";
import type { FormEvent } from "react";

export default function SendMessageInput({ conversationId, name }: { conversationId: string; name: string }) {
    async function sendMessageHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const messageInput = e.currentTarget.elements.namedItem("message") as HTMLInputElement
        try {
            await sendMessage({
                conversationId: Number(conversationId),
                text: messageInput.value,
            })
        } catch (error) {
            console.log(error)
        }
        messageInput.value = ""
    }

    return (
        <div className="w-full  py-3 px-4  bg-primary">
            <form onSubmit={sendMessageHandler}>
                <input
                    autoComplete="off"
                    name="message"
                    placeholder={`Write to ${name}`}
                    className="
                bg-secondary w-full placeholder:capitalize focus:outline-none text-gray-100 placeholder:text-zinc-400 px-4 py-3 rounded-md"
                />
            </form>
        </div>
    )
}
