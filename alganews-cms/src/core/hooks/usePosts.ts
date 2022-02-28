import { useDispatch, useSelector } from "react-redux";
import { Posts } from "../../sdk/@types/Posts";
import SelectPaginatedPosts from "../select/SelectPaginatedPosts";
import SelectPostsFetching from "../select/SelectPostsFetching";
import * as PostActions from "../store/Post.slice"

export default function usePosts() {

    const dispatch = useDispatch()

    const paginated = useSelector(SelectPaginatedPosts)

    const loading = useSelector(SelectPostsFetching)

    async function fetchPosts(query: Posts.Query) {

        dispatch(PostActions.fetchPosts(query))
        
    }
    return {
        paginated,
        loading,
        fetchPosts,
    }
    
}