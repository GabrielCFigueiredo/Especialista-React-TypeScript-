import Confirm from '../../../core/utilis/Confirm'
import Inf from '../../../core/utilis/Info'
import Logo from '../../components/Logo'
import NavBar from '../../components/NavBar/NavBar'
import SessionController from '../../components/SessionController/SessionController'
import * as DL from './DefaultLayouts.styles'

export interface DefaultLayoutsProps {
    children: React.ReactNode
}

export default function DefaultLayout(props: DefaultLayoutsProps ) {
    return (
        <DL.Wrapper>
            <DL.Header> 
                <Logo/>
            </DL.Header>
            <DL.Main>
                <DL.Navigation>
                    <NavBar/>
                </DL.Navigation>
                <DL.FeaturedContent>
                    { props.children }
                </DL.FeaturedContent>
                <DL.Aside>
                    <SessionController
                    name= 'Gabriel Figueiredo'
                    description= 'Editor a 2 anos'
                    onLogout={() => {
                        Confirm({
                            title: 'Você tem certeza que deseja deslogar?',
                            onConfirm: () => {
                                Inf({
                                    title: 'Vocề foi deslogado',
                                    description: 'Você sera redirecionado a pagina de login'
                                })
                            }
                        })
                    }}
                    
                    />
                </DL.Aside>
            </DL.Main>
        </DL.Wrapper>
    )
}