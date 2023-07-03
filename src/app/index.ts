import { configureStore } from "@reduxjs/toolkit";
import converstaionsReducer, { conversationsAdapter } from './slices/conversations'

export const store = configureStore({
    reducer: {
        conversations: converstaionsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const conversationsSelector = conversationsAdapter.getSelectors<RootState>(
    (state) => state.conversations
)
