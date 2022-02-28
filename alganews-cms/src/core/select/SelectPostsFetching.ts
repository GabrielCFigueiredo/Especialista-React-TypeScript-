import { RootState } from "../store";

export default function SelectPostsFetching(state: RootState ) {

    return state.post.fetching
    
}