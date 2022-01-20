import { mdiUpload } from '@mdi/js'
import { mdiDelete } from '@mdi/js'; 
import Icon from '@mdi/react'
import { ChangeEvent, useState } from 'react'
import FileService from '../../../sdk/services/File.service';
import Button from '../Button/Button'
import * as IU from './ImageUpload.styles'


export interface ImageUploadProps  {

    label: string,
    onImageUpload: (imageUrl: string) => any
    
}

export default function ImageUpload(props: ImageUploadProps ) {

    const [filePreview, setFilePreview] = useState <string | null>(null)

    function hendleChange(e: ChangeEvent<HTMLInputElement>) {

        const file = e.target.files![0]

        if(file){
            const reader = new FileReader()

            reader.addEventListener('load', async e => {
                setFilePreview(String(e.target?.result))
               
                const imageUrl = await FileService.upload(file)

                props.onImageUpload(imageUrl)
                
            })

            reader.readAsDataURL(file)
        } 

    }

    if(filePreview){
        return <IU.ImagePreviewWrapper>
                <IU.ImagePreview preview={filePreview}>
                    <Button
                    variant={'primary'}
                    label={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><p>Remover imagem</p><Icon
                        size= {'24px'}
                        path={mdiDelete}
                        /></div>}
                    onClick={() => setFilePreview(null)}
                    />
                    
                </IU.ImagePreview>
            </IU.ImagePreviewWrapper>
    }
    return(
        <IU.Wrapper>
            <IU.Label>
                <Icon
                size= {'24px'}
                path={mdiUpload}
                />
                {props.label}:
                <IU.Input
                onChange={hendleChange}
                type= 'file'
                />
            </IU.Label>
        </IU.Wrapper>
    )
}