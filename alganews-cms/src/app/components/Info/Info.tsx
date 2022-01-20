import Icon from "@mdi/react";
import styled from "styled-components";
import { mdiInformation } from '@mdi/js';
import { transparentize } from "polished";


export interface InfoProps {
    title: string
    description: string
}

export default function Info({ title, description } : InfoProps) {

   
    
    return<InfoWrapper>
        
    <InfoInnerContent>
        <InfoIcon>
            <Icon
            size= '48px'
            color= '#09f'
            path={mdiInformation}
            />
        </InfoIcon>
        <InfoMessage>
            <InfoTitle>
                {title}
            </InfoTitle>
            <p>
                {description}
            </p>
        </InfoMessage>

    </InfoInnerContent>
    </InfoWrapper>
}


const InfoWrapper = styled.div `
    display: flex;
    padding: 24px;
    align-items: center;
    justify-content: center;
    background-color: #F3F8FA;
    width: 430px;
    border: 1px solid ${transparentize(0.9, '#274060')}
`

const InfoInnerContent = styled.div `
    display: flex;
    gap: 24px;
    color: #244060;
`

const InfoIcon = styled.div `
    
`

const InfoMessage = styled.div `
    display: flex;
    flex-direction: column;
    gap: 12px;
`
const InfoTitle = styled.div `
    font-size: 24px;
    font-weight: 500;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-clamp: 1;
    overflow: hidden;
`
