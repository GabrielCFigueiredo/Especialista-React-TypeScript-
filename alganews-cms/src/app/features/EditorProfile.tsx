import { transparentize } from "polished";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { User } from "../../sdk/@types/User";
import UserService from "../../sdk/services/User.service";
import getEditorsDescription from "../../sdk/utils/getEditorsDescriptor";
import FieldDescriptor from "../components/FieldDescriptor/FieldDescriptor";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";


interface EditorProfileFeatureProps {

    hideData?: boolean;
}

export default function EditorProfileFeature( props: EditorProfileFeatureProps){

    //throw new Error('Hove um erro');

    const [editor, setEditor] = useState<User.EditorDetailed>()
    const params = useParams()

    useEffect(() => {
        UserService.getExistingEditor(Number(params.id))
        .then(setEditor)
    },[params.id])




  if (!editor)
  return null

    return<Wrapper>
        <Card>
            <div>
            <Imagem src={editor?.avatarUrls.default} alt="imagem perfil"/>
            </div>
            <div>
            <p>{editor?.name}</p>
            <p>{getEditorsDescription(new Date(editor?.createdAt))}</p>
            </div>
        </Card>

        <Divisao/>

        <Container>
            <Paragrafo>
        <p>
            {editor?.bio}
        </p>
        
        <Progress>

            {
                editor?.skills?.map((skill) => {
                    return <ProgressBar
                    title={skill.name}
                    progress={skill.percentage}
                    theme={'primary'}
                    />
                })
            }
        </Progress>
         </Paragrafo>
         <div>
        <Estado>
                <FieldDescriptor label="Cidade"
                 value={editor?.location.city}/>
                <FieldDescriptor label="Estado"
                 value={editor?.location.country}/>
                {
                    !props.hideData && <>
                <FieldDescriptor label="Celular" value={'+551699999993'}/>
                <FieldDescriptor label="E-mail" value={'gabriel.devsistema@gmail.com'}/>
                <FieldDescriptor label="Nascimento" value={'2 de maio de 1985'}/>
                </>
                }
        </Estado>
        </div>
        </Container>
        {
            !props.hideData && <CardValue>
            <Value>
            <ValueDescriptor label={'palavras nesta semana'} value={560322.02} color={'default'} isCurrency={false} />
            <ValueDescriptor label={'palavras no mês'} value={560322.02} color={'default'} isCurrency={false} />
            <ValueDescriptor label={'total de palavras'} value={560322.02} color={'default'} isCurrency={false} />
            </Value>
            <Value>
            <ValueDescriptor label={'palavras nesta semana'} value={560322.02} color={'primary'} isCurrency={true} />
            <ValueDescriptor label={'palavras nesta semana'} value={560322.02} color={'primary'} isCurrency={true} />
            <ValueDescriptor label={'palavras nesta semana'} value={560322.02} color={'primary'} isCurrency={true} />
            </Value>
        </CardValue>

        }

    </Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
`

const Imagem = styled.img`
        
height: 50px;
width: 50px;
`

const Card = styled.div`

display: flex;
align-items: center;
gap: 32px;
`
const Divisao = styled.div`

border-bottom: 1px solid ${transparentize(0.9, '#274060')};

`
const Container = styled.div`

display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows:  2;
gap: 24px;

`
const Estado = styled.div`

display: flex;
flex-wrap: wrap;
gap: 36px 0;
>* {
    width: 100%;
  }
&>:nth-child(1),
  &>:nth-child(2) {
    width: 50%;
  }

`
const Progress = styled.div`

display: flex;
flex-direction: column;
gap: 16px;

`
const CardValue = styled.div`

display: grid;
grid-template-columns: 1fr 1fr;
gap: 32px ;

`
const Value = styled.div`

display: grid;
gap: 16px ;

`
const Paragrafo = styled.div`

display: grid;
gap: 16px ;

`
