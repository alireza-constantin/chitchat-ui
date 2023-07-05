import { createAsyncThunk,  createSlice } from "@reduxjs/toolkit"
import {  Message } from "@/types"
import { getChatsById } from "@/api/conversation"

// Define the initial state using that type
type InitialState = Message[]
const initialState: InitialState = []

export const fetchMessagesById = createAsyncThunk("messages/fetchById", (id: string) =>
    getChatsById(id)
)

export const messagesSlice = createSlice({
    name: "messages",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addConversation: (state, action) => {
            state.push(action.payload)
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchMessagesById.fulfilled, (_, action) => {
            return action.payload.messages
        })
    },
})

export const { addConversation } = messagesSlice.actions

export default messagesSlice.reducer

// Selectors
