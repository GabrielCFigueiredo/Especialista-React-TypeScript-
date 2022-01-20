import styled from "styled-components";
import { Link } from 'react-router-dom'


export const Wrapper = styled(Link) ` 
align-items: center;
height: 6em;
&:hover {
    border: 4.5px solid #00f;
    
}
`

export const Card = styled.div ` 
display: flex;
align-items: center;
`

export const WrapperLink = styled.a ` 
background:#fff;
border: 1px solid green;
margin: 0px;
display: block;
width: 100%;
height: 5.5em;
text-decoration: none;
cursor: pointer;
`


export const Imagem = styled.img ` 
width: 3em;
height: 4em;
margin-left: .5em;
margin-top: .5em;

`

export const Name = styled.p ` 
font-weight: 700;
`