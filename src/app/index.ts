import { configureStore } from "@reduxjs/toolkit";
import converstaionsReducer, { conversationsAdapter } from './slices/conversations'
import messagesReducer from './slices/messages'

export const store = configureStore({
    reducer: {
        conversations: converstaionsReducer,
        messages: messagesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const conversationsSelector = conversationsAdapter.getSelectors<RootState>(
    (state) => state.conversations
)
