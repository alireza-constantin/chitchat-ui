import { User } from "@/types"

export function isUserAuthor(userId: number, authorId: number): boolean {
    return userId === authorId
}

export function getFullName(user: User) {
    return `${user.firstName} ${user.lastName}`
}
