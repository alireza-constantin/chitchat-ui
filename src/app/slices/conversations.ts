import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { Conversation } from "@/types"
import { getAllUserConversations } from "@/api/conversation"
import { RootState } from ".."

// Define the initial state using that type
export const conversationsAdapter = createEntityAdapter<Conversation>({
    selectId: (conversation) => conversation.id,
})

export const fetchUserConversations = createAsyncThunk("conversations/fetchAll", () =>
    getAllUserConversations()
)

export const conversationsSlice = createSlice({
    name: "conversations",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState: conversationsAdapter.getInitialState(),
    reducers: {
        addConversation: conversationsAdapter.addOne,
    },
    extraReducers(builder) {
        builder.addCase(fetchUserConversations.fulfilled, (state, action) => {
            conversationsAdapter.setAll(state, action.payload)
        })
    },
})

export const { addConversation } = conversationsSlice.actions

export default conversationsSlice.reducer

// Selectors
export const { selectAll: selectAllConversations, selectById: selectConversationById } = conversationsAdapter.getSelectors<RootState>(
    (state) => state.conversations
)
