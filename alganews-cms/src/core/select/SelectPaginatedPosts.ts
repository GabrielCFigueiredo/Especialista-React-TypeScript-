import { RootState } from "../store";

export default function SelectPaginatedPosts(state: RootState) {

    return state.post.pagineted?.content;
    
}