import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { User } from "../../sdk/@types/User";
import UserService from "../../sdk/services/User.service";
import getEditorsDescription from "../../sdk/utils/getEditorsDescriptor";
import Profile from "../components/Profile/Profile";


export default function EditorList() {

    const [editors, setEditors] = useState<User.EditorSummary[]>([])

    useEffect(() => {

        UserService.getAllEditors()
        .then(setEditors)
        
    },[])

    if(!editors.length)

    return <EditorListWrapper>
        <Skeleton height={88} width={320}/>
        <Skeleton height={88} width={320}/>
        <Skeleton height={88} width={320}/>
    </EditorListWrapper>

    return <EditorListWrapper>

       {
           editors.map((editor) => {
               return <Profile key={editor.id}
               editorId={editor.id}
               name={editor.name}
               description={getEditorsDescription( new Date(editor.createdAt))}
               avatarUrl={editor.avatarUrls.medium}
               />
           } )
       }

    </EditorListWrapper>
}

const EditorListWrapper = styled.div`
    
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 24px;
`