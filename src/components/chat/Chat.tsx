// import { LoaderFunctionArgs, useLoaderData, useParams, useRouteLoaderData } from "react-router-dom"
// import { ProfilePic } from "../ProfilePic"
// import { ConversationWithMessages, Message, Recipient } from "@/types"
// import ChatMessageHeader from "./ChatMessageHeader"
// import ChatMessage from "./ChatMessageText"
// import { getChatsById, sendMessage } from "@/api/conversation"
// import { FormEvent, useEffect } from "react"
// import { socket } from "@/utils/socket"

// export async function loader({ params }: LoaderFunctionArgs) {
//     return getChatsById(params.chatId!)
// }

// function getMessageAuthor(authorId: number, user: Recipient, recipient: Recipient) {
//     return authorId === user.id
//         ? { name: user.firstName + " " + user.lastName, isAuthor: true }
//         : { name: recipient.firstName + " " + recipient.lastName, isAuthor: false }
// }

// export default function Chat() {
//     const params = useParams()


//     let { messages, recipinet, ...conversation } = useLoaderData() as ConversationWithMessages;
//     const user = useRouteLoaderData("root") as Recipient

   

//     useEffect(() => {
//         fetchConversationById(params.chatId!)
//     }, [])

//     useEffect(() => {
//         socket.on('connect', () => console.log('connected'))
//         socket.on('onMessage', (msg: Message) => {
//             console.log(msg)
//             addToMessages(msg)
//         })

//         return () => {
//             socket.off('connect')
//         }
//     }, [])


//     return (
//         <div className="w-full max-h-screen overflow-hidden">
//             <div className="flex flex-col justify-between h-full overflow-y-hidden">
//                 <ChatHeader
//                     name={
//                         conversations[0]?.recipinet.firstName +
//                         " " +
//                         conversations[0]?.recipinet.lastName
//                     }
//                 />
//                 <div className="flex-1 px-6 flex flex-col-reverse py-2 overflow-y-auto no-scrollbar">
//                     {/* just for strict mode -- remove it in production */}
//                     {conversations[0]?.messages
//                         .reverse()
//                         .map(({ authorId, id, text, createdAt }, idx, messages) => {
//                             const nextMessage = idx + 1
//                             // check to see if the author of current message and next are same
//                             // so we can just return chat message text not the header
//                             if (
//                                 messages[nextMessage] &&
//                                 authorId === messages[nextMessage].authorId
//                             ) {
//                                 return <ChatMessage key={id} text={text} date={createdAt} />
//                             }

//                             return (
//                                 <ChatMessageHeader
//                                     user={getMessageAuthor(authorId, user, conversations[0]?.recipinet)}
//                                     key={id}
//                                 >
//                                     <ChatMessage key={id} text={text} date={createdAt} />
//                                 </ChatMessageHeader>
//                             )
//                         })}
//                 </div>
//               <ChatInput />
//             </div>
//         </div>
//     )
// }


// function ChatHeader({ name }:{name: string}){
//     return (
//         <div
//             className="w-full flex items-center bg-zinc-900 
//             flex-start h-[64px] pl-6 gap-4"
//         >
//             <ProfilePic />
//             <h5 className="text-lg text-gray-100">
//                 {name}
//             </h5>
//         </div>
//     )
// }

// function ChatInput(){
//      async function sendMessageHandler(e: FormEvent<HTMLFormElement>) {
//          e.preventDefault()
//          const messageInput = e.currentTarget.elements.namedItem("message") as HTMLInputElement
//          try {
//              await sendMessage({ conversationId: conversations[0].id, message: messageInput.value })
//          } catch (error) {
//              console.log(error)
//          }
//          messageInput.value = ""
//          // sendMessage({ conversationId: conversation.id, text: })
//      }

//     return (
//         <div className="w-full h-20  p-4 bg-zinc-800">
//             <form onSubmit={sendMessageHandler}>
//                 <input
//                     name="message"
//                     placeholder={`Write to ${conversations[0]?.recipinet.firstName} ${conversations[0]?.recipinet.lastName}`}
//                     className=" 
//                 bg-zinc-900 w-full placeholder:capitalize focus:outline-none text-gray-200 placeholder:text-zinc-500 px-4 py-3 rounded-md"
//                 />
//             </form>
//         </div>
//     )
// }
export default function Chat(){
    return <div>Chat</div>
}