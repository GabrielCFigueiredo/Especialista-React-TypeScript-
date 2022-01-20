import Button from '../Button/Button'
import * as SC from './SessionController.styles'

export interface SessionControllerProps {
name: string
description: string
onLogout?: any
}

export default function SessionController(props :SessionControllerProps){
    return(
        <SC.Wrapper>
            <SC.Card>
               <SC.Imagem src='https://thumbs.dreamstime.com/b/forma-masculina-do-estilo-do-moderno-do-homem-do-avatar-do-%C3%ADcone-do-perfil-62449823.jpg' alt= 'Avatar'/>
            </SC.Card>
            <SC.Card>
            <SC.Name>{props.name}</SC.Name>
            </SC.Card>
            <SC.Card>
            {props.description}
            </SC.Card>
            <SC.Card>
            <Button
            label="Logout"
            variant="danger"
            onClick={props.onLogout}
            />
            </SC.Card>
            
        </SC.Wrapper>
    )
}