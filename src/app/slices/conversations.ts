import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { Conversation } from "@/types"
import { getAllUserConversations } from "@/api/conversation"

// Define the initial state using that type
const conversationsAdapter = createEntityAdapter<Conversation>({
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
            console.log(action.payload)
            conversationsAdapter.setAll(state, action.payload)
        })
    },
})

export const { addConversation } = conversationsSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const conversationsSelector = conversationsAdapter.getSelectors<RootState>(
//     (state) => state.conversations
// )

// export const allBooks = conversationsSelector.selectAll(store.getState())

export default conversationsSlice.reducer
