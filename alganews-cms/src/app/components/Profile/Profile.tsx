import * as P from './Profile.styles'
export interface ProfileProps {
    name: string
    description: string
    editorId: number
    avatarUrl: string
}

export default function Profile (props: ProfileProps){
    return (
        <P.Wrapper to={`/editores/${props.editorId}`}>
            <P.WrapperLink>
            <P.Card >
            <div>
               <P.Imagem src={props.avatarUrl} alt= 'Avatar'/>
            </div>
            <div style={{marginLeft: '1em'}}>
                <div>
                    <P.Name>{ props.name }</P.Name>
                </div>
                <div style={{marginTop: '1em'}}>
                { props.description}
                </div>
            </div>
            </P.Card>
            </P.WrapperLink>
        </P.Wrapper>
    )
}