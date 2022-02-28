import { createAsyncThunk, createReducer, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import { UserService } from "../../sdk";
import { User } from "../../sdk/@types/User";


interface EditorsStoreState {
    editorList: User.EditorSummary[]
    fetching: boolean
}

export const fetchAllEditors = createAsyncThunk('editors/fetchAllEditors', async function () {

    return UserService.getAllEditors()
    
})

const initialState: EditorsStoreState = {
    editorList: [],
    fetching: false
}

export const editorsReducer =  createReducer(initialState, (builder) => {

    const pending = isPending(fetchAllEditors)
    const rejected = isRejected(fetchAllEditors)
    const fulfilled = isFulfilled(fetchAllEditors)

    builder.addCase(fetchAllEditors.fulfilled, (state, action) => {

        state.editorList = action.payload;
    }).addMatcher(pending, (state) => {
        state.fetching = true
    })
    .addMatcher(rejected, (state) => {
        state.fetching = false
    })
    .addMatcher(fulfilled, (state) => {
        state.fetching = false
    })
})