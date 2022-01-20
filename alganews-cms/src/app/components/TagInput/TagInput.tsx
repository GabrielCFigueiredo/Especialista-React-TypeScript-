import * as TI from './TagInput.styles'
import { WithContext as ReactTagInput, Tag} from 'react-tag-input'


export interface TagInputProps {

    onAdd: (tag: Tag) => any
    onDelete: (i: number) => any
    tags: Tag[]
    placeholder: string
}

export default function TagInput(props: TagInputProps){

    const keyCodes = {
        enter: 13
    }
    return (
        <TI.Wrapper>
            <ReactTagInput
            placeholder={props.placeholder}
            handleAddition={props.onAdd}
            handleDelete={props.onDelete}
            tags={props.tags}
            allowDragDrop={false}
            autofocus={false}
            delimiters={[keyCodes.enter]}
            />    
        </TI.Wrapper>
    )
}