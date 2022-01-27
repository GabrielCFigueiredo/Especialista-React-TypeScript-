import { mdiUpload } from '@mdi/js'
import { mdiDelete } from '@mdi/js'; 
import Icon from '@mdi/react'
import { ChangeEvent, useState } from 'react'
import FileService from '../../../sdk/services/File.service';
import Button from '../Button/Button'
import Loading from '../Loading/Loading';
import * as IU from './ImageUpload.styles'


export interface ImageUploadProps  {

    label: string,
    onImageUpload: (imageUrl: string) => any
    
    
}

export default function ImageUpload(props: ImageUploadProps ) {

    const [filePreview, setFilePreview] = useState <string | null>(null)

    const [pushing, setPushing] = useState(false)

    function hendleChange(e: ChangeEvent<HTMLInputElement>) {



        const file = e.target.files![0]

        if(file){
            const reader = new FileReader()

            reader.addEventListener('load', async e => {

                try {

                    setPushing(true)

                    setFilePreview(String(e.target?.result))
                   
                    const imageUrl = await FileService.upload(file)
    
                    props.onImageUpload(imageUrl)
                }finally{

                    setPushing(false)
                }
                
                
            })

            reader.readAsDataURL(file)
        } 

        
    }


    if(filePreview){
        return <IU.ImagePreviewWrapper>
            <Loading show={pushing} />
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
            <Loading show={pushing} />
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