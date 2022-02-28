import { RootState } from "../store";

export default function SelectPostsCounter(state: RootState ) {

    return state.post.counter
    
}