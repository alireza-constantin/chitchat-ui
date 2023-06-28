import { Conversation, ConversationWithMessages } from "@/types"
import { api, withCredConf } from "./config"

export const getChatsById = async(chatId: string) => {
    const res = await api.get<ConversationWithMessages>(
        `/conversations/${chatId}`,
        withCredConf
    )
    return res.data
}

export const getAllUserConversations = async() => {
    const res = await api.get<Conversation[]>("/conversations", withCredConf)
    return res.data
}