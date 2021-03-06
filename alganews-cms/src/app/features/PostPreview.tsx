import { useEffect, useState } from "react"
import styled from "styled-components"
import Confirm from "../../core/utilis/Confirm"
import info from "../../core/utilis/Info"
import modal from "../../core/utilis/modal"
import { Posts } from "../../sdk/@types/Posts"
import PostService from "../../sdk/services/Post.service"
import Button from "../components/Button/Button"

import Loading from "../components/Loading/Loading"
import MarkdownEditor from "../components/MarkdownEditor/MarkdownEditor"


export interface PostPreviewProps {
    
    postId: number
}

function PostPreview(props: PostPreviewProps) {

    

    const [post, setPost] = useState<Posts.PostDetailed>()
    const [loading, setLoading] = useState(false)


    async function publishing(): Promise<void> {

        await PostService.publishingPost(props.postId)

        info({
            title: 'Post Publicado',
            description: 'Você publicou o post com sucesso'
        })
        
    }

    function reOpenModal() {

        modal({
            children: <PostPreview postId={props.postId}/>
        })
        
    }


    useEffect(() => {

        setLoading(true)

        PostService.getExistingPost(props.postId)
        .then(setPost)
        .catch((error) => error.message)
        .finally(() => setLoading(false))
    },[props.postId])

    if(loading)

    return <Loading show/>

    if(!post) 

    return null


    return <WrapperPostPreview>

        <CardPreview>
            
           <p>{post?.title}</p>
          
           <Button
           label={'Publicar'}
           variant="danger"
           disabled={post.published}
           onClick={() => {
               Confirm({

                   title: 'publicar o post?',
                   onConfirm: publishing,
                   onCancel: reOpenModal
                   
               })
           }}
           />
           <Button
           label={'Editar'}
           variant="primary"
           disabled={post.published}
           onClick={() => window.location.pathname = (`/posts/editar/${props.postId}`)}
           />
        
        </CardPreview>
        
            <Image src={post?.imageUrls.medium} alt="casa" />
        

        <MarkdownEditor
        readOnly
        value={post?.body}
        />
        

    </WrapperPostPreview>
    
}

export default PostPreview

const WrapperPostPreview = styled.div `
    
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 655px;
    background-color: #f3fafa;
    border: 1px solid #ccc;
    padding: 24px;
    flex-direction: column;
    max-height: 50vh;
    overflow-y: auto;
    //scrollbar-color: rebeccapurple green;
    padding: 24px;
    
 ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
}
::-webkit-scrollbar {
    width: 8px;
    background: #f3f1f1;
}
::-webkit-scrollbar-thumb {
    background: #3b3b3b;
    border-radius: 50px;
}    
`

const CardPreview = styled.div `
    
    display: grid;
    grid-template-columns: 6fr 1fr 1fr;
    gap: 8px;
    width: 100%;
    height: 27px;
`

const Image = styled.img `
    
    width: 100%;
    height: 240px;
    object-fit: cover;
`

