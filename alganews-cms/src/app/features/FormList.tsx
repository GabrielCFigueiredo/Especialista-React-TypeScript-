import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tag } from "react-tag-input";
import styled from "styled-components";
import countWordsInMarkdown from "../../core/utilis/CountWordsInMarkdown";
import Info from "../../core/utilis/Info";
import PostService from "../../sdk/services/Post.service";
import Button from "../components/Button/Button";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import Input from "../components/Input/Input";
import Loading from "../components/Loading/Loading";
import MarkdownEditor from "../components/MarkdownEditor/MarkdownEditor";
import TagInput from "../components/TagInput/TagInput";
import WordPriceCounter from "../components/WordPriceCounter/WordPriceCounter";


export interface PostFormProps {

    postId?: number 
}


export default function FormList(props: PostFormProps) {

    const [tags, setTags] = useState<Tag[]>([])
    const [body, setBody] = useState('')
    const [title, setTitle] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const [publishing, setPublishing] = useState(false)

    const navigate = useNavigate()


    async function insertNewPost() {


            const NewPost = {

                body, title, imageUrl, tags: tags.map(tag => tag.text),
             }
             await PostService.insertPost(NewPost)
            Info({
                title: 'Post salvo',
                description: 'Vocè acabou de criar seu post!' 
            })
       
        
    }


    async function updateExistingPost(postId: number) {

        const NewPost = {

            body, title, imageUrl, tags: tags.map(tag => tag.text),
         }

         await PostService.publishingPost(postId)

         Info({

            title: 'Post atualizado',
                description: 'Vocè acabou de atualizar seu post!' 

         })
        
    }

    function fetchPost(postId: number) {

        PostService.getExistingPost(postId)
        .then(post => {
            setTitle(post.title)
            setBody(post.body)
            setImageUrl(post.imageUrls.default)
            setTags(post.tags.map(tag => ({
                id: tag,
                text: tag
            })))
        })
        
    }

    useEffect(() => {

        if(props.postId)

        fetchPost(props.postId)

    },[props.postId])



    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        setPublishing(true)

        try {

             props.postId ? await updateExistingPost(props.postId) : await insertNewPost()

        } finally {


            setPublishing(false)
        }

       

        navigate('/')
    }

    return <FormListWrapper onSubmit={handleSubmit}>

        <Loading show={publishing} />

        <Input
            label={'Titulo'}
            value={title}
            onChange={e => setTitle(e.currentTarget.value)}
            placeholder={'Digite seu Titulo'}
        />

        <ImageUpload
            onImageUpload={setImageUrl}
            label={'Thumbnail do post'}
            image={imageUrl}

        />

        <MarkdownEditor
            onchange={setBody}
            value={body}
        />
        <TagInput
            tags={tags}
            onAdd={tag => setTags([...tags, tag])}
            onDelete={index => setTags(tags.filter((tag, i) => i !== index))}
            placeholder={'Insira as tag deste post'}
        />
        <FormCount>
            <WordPriceCounter
                pricePerCount={0.25}
                wordsCount={countWordsInMarkdown(body)}
            />
            <Button
                variant={'primary'}
                label={'salvar post'}
                type={'submit'}
                disabled={!title || !imageUrl || !body || !tags.length}
            />
        </FormCount>
    </FormListWrapper>
}

const FormListWrapper = styled.form`
display: grid;
grid-template-columns: 1fr;
gap: 24px;

`

const FormCount = styled.div`
display: flex;
justify-content: space-between;

 `