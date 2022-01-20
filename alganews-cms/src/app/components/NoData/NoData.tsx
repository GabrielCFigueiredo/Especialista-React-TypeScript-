import styled from "styled-components";

export interface NoDataProps {
    height?: number,
}

export default function NoData({ height = 120 } : NoDataProps){
    return <NoDataWrapper height={height}>
            <Message>Sem nada para exibir!</Message>
            <SadeFace>:(</SadeFace>
    </NoDataWrapper>
}

const NoDataWrapper = styled.div<{height: number}>`
 display: flex;
 gap: 10px;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: ${p => p.height}px;
`

const Message = styled.span `
    
font-size: 24px;
font-weight: 700;
color: #274060;
`

const SadeFace = styled.span `
    
font-family: 'Roboto mono', monospace;
color: #0099ff;
font-weight: 700;
`