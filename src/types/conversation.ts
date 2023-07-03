export type Recipient = {
    firstName: string
    lastName: string
    id: number
}

export type Conversation = {
    id: number
    createdAt: string
    updatedAt: string
    creatorId: number
    recipientId: number
    recipinet: Recipient
    creator: Recipient
}

export type Message = {
    authorId: number
    conversationId: number
    createdAt: string
    id: number
    text: string
    updatedAt: string
}

export type SendMessage = {
    conversationId: number,
    message: string
}

export type ConversationWithMessages = Conversation & { messages: Message[] }
