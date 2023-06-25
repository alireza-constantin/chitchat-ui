import { FormInput } from "./FormInput";

export default function CreateConversation(){
    return (
        <form>
            <FormInput />
            <textarea className="textarea w-full bg-zinc-900 h-40" />
            <button className="btn btn-primary capitalize h-8 w-full mt-1">Create Conversation</button>
        </form>
    )
}