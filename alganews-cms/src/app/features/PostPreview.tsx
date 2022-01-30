import styled from "styled-components"


export interface PostPreviewProps {
    
    postId: number
}

function PostPreview(props: PostPreviewProps) {

    return <WrapperPostPreview>

        features/PostPreview

        {props.postId}

    </WrapperPostPreview>
    
}

export default PostPreview

const WrapperPostPreview = styled.div `
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 100px;
    background-color: #fff;
    border: 1px solid #ccc
`