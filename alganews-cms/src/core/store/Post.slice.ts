import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejected, PayloadAction } from "@reduxjs/toolkit";
import { PostService } from "../../sdk";
import { Posts } from "../../sdk/@types/Posts";


interface PostSliceState {
    pagineted?: Posts.PostsPaginated
    fecthing: boolean;
}

const initialState: PostSliceState = {

    fecthing: false,

    pagineted: {
        page: 0,
        size: 0,
        totalElements: 0,
        totalPages: 1,
        content: []
    }
}

export const fecthPosts = createAsyncThunk(
    'post/fecthPosts',

    async function() {

        const posts = await PostService.getAllPosts({})

        return posts
        
    }

)
 
const PostSlice = createSlice ({
    name: "post",
    initialState,
    reducers: {
        addPost(state, action: PayloadAction<Posts.PostSummary>) {
            state.pagineted?.content?.push(action.payload)
        }
    },
    extraReducers(builder) {

        const pendingActions = isPending(fecthPosts)
        const fulfilledActions = isFulfilled(fecthPosts)
        const rejectedActions = isRejected(fecthPosts)

        builder.addCase(fecthPosts.fulfilled, (state, action) => {
            state.pagineted =action.payload;
        }).addMatcher(pendingActions, (state) => {
            state.fecthing = true
        }).addMatcher(fulfilledActions, (state) => {
            state.fecthing = false
        }).addMatcher(rejectedActions, (state) => {
            state.fecthing = false
        })
    }
})

export const postReducer = PostSlice.reducer
export const { addPost } = PostSlice.actions