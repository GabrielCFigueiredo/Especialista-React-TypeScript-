import { Posts } from "../@types/Posts";
import generateQueryString from "../utils/generateQueryString";
import Service from "./Service";




class PostService extends Service {

    static getAllPosts(search: Posts.Query) {
        const queryString = generateQueryString(search)
        console.log(queryString);
        
        return this.Http.get<Posts.PostsPaginated>('/posts'.concat(queryString))

        .then(this.getData)
    }

    static getExistingPost(id: number) {
        return this.Http.get<Posts.PostDetailed>(`/posts/${id}`)
        .then(this.getData)
    }

    static insertPost(post: Posts.PostInput) {
        return this.Http.post<Posts.PostDetailed>(`/posts`, post)
        
        .then(this.getData)
    }

    static publishingPost(postId: number) {
        return this.Http.put<{}>(`/posts/${postId}/publishing`)
        
        .then(this.getData)
    }

    static postEdit(postId: number, post: Posts.PostInput) {
        return this.Http.put<Posts.PostDetailed>(`/posts/${postId}`, post)
        
        .then(this.getData)
    }

}

export default PostService