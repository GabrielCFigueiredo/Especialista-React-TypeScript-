import { useState } from "react";
import { Tag } from "react-tag-input";
import styled from "styled-components";
import countWordsInMarkdown from "../../core/utilis/CountWordsInMarkdown";
import Info from "../../core/utilis/Info";
import PostService from "../../sdk/services/Post.service";
import Button from "../components/Button/Button";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import Input from "../components/Input/Input";
import MarkdownEditor from "../components/MarkdownEditor/MarkdownEditor";
import TagInput from "../components/TagInput/TagInput";
import WordPriceCounter from "../components/WordPriceCounter/WordPriceCounter";


export default function FormList() {

    const [tags, setTags] = useState<Tag[]>([])
    const [body, setBody] = useState('')
    const [title, setTitle] = useState('')
    const [imageUrl, setImageUrl] = useState('')

   
    
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()

        const NewPost = {

            body,
            tags: tags.map(tag => tag.text),
            title,
            imageUrl,
        }
        const newPost = await PostService.insertPost(NewPost)
        Info({
            title: 'Post salvo',
            description: 'Vocè acabou de criar seu post!' + newPost.id
        })
    }

    return <FormListWrapper onSubmit={handleSubmit}>
    
        <Input
        label={'Titulo'}
        value={title}
        onChange={e => setTitle(e.currentTarget.value)}
        placeholder={'Digite seu Titulo'}
        />
        
            <ImageUpload
            onImageUpload={setImageUrl}
            label={'Thumbnail do post'}
            />
       
            <MarkdownEditor
            onchange={setBody}
            />
        <TagInput
        tags={tags}
        onAdd= {tag => setTags([...tags, tag])}
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