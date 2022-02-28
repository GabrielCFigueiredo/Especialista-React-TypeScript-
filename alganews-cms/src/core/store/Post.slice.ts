import { createAction, createAsyncThunk, createReducer, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import { PostService } from "../../sdk";
import { Posts } from "../../sdk/@types/Posts";


interface PostSliceState {
    pagineted?: Posts.PostsPaginated
    fetching: boolean;
    counter: number
}

const initialState: PostSliceState = {

    fetching: false,
    counter: 0,

    pagineted: {
        page: 0,
        size: 0,
        totalElements: 0,
        totalPages: 1,
        content: []
    }
}

export const fetchPosts = createAsyncThunk(
    'post/fecthPosts',

    async function(query: Posts.Query) {

        const posts = await PostService.getAllPosts(query)

        return posts
        
    }

)

export const increment = createAction('post/increment')

 export const PostReducer = createReducer(initialState, (builder) => {

    const pendingActions = isPending(fetchPosts)
    const fulfilledActions = isFulfilled(fetchPosts)
    const rejectedActions = isRejected(fetchPosts)

    builder.addCase(increment, (state) => {
        state.counter++
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
        state.pagineted =action.payload;
    }).addMatcher(pendingActions, (state) => {
        state.fetching = true
    }).addMatcher(fulfilledActions, (state) => {
        state.fetching = false
    }).addMatcher(rejectedActions, (state) => {
        state.fetching = false
    })

})
 