export type User = {
    firstName: string
    lastName: string
}

export type UserWithEmail = User & { email: string }

export type Conversation = {
    id: number
    createdAt: string
    updatedAt: string
    creatorId: number
    recipientId: number
    recipinet: UserWithEmail
    creator: User
}

export type Message = {
    authorId: number
    conversationId: number
    createdAt: string
    id: number
    text: string
    updatedAt: string
    author: User
}

export type SendMessage = {
    conversationId: number,
    text: string
}

export type ConversationWithMessages = Conversation & { messages: Message[] }
