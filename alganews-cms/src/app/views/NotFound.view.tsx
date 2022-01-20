import { useNavigate} from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button/Button";
import ImageNotFound from "../features/ImageNotFound";


export default function Notfound() {

    const navigate = useNavigate()
    return<NotFoundWrapper>
            <Title>
                Oops!
            </Title>
            <Text>Não encontramos esta página</Text>
            <ImageNotFound/>
            <Button
            variant={'primary'}
            label={'Ir para a home'}
            onClick={() => navigate('/')}
            />
        </NotFoundWrapper>

}

const NotFoundWrapper = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    gap: 32px;
`

const Title = styled.span`
    
    color: #274060;
    font-size: 72px;
    font-family: Lato, sans-serif;
    font-weight: 400;
`

const Text = styled.p`
    font-size: 18px;
    color: #274060;
`