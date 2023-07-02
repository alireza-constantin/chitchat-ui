import { Conversation, ConversationWithMessages, SendMessage } from "@/types"
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

export const sendMessage = async(data: SendMessage) => {
    const res = await api.post('/message', data,withCredConf)
    return res.data
}