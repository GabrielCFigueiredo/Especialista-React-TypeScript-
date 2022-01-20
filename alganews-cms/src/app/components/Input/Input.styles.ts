import { transparentize } from "polished";
import styled from "styled-components";


export const Wrapper = styled.label `
display: flex;
flex-direction: column;
justify-content: space-between;
border-bottom: 1px solid #274060;
height: 56px;

`
export const Label = styled.span `
font-size: 14px;
font-weight: 500;
color: #274060;
`
export const CampInput = styled.input `
height: 28px;
font-size: 18px;
font-weight: 500;
color: #274060;
padding-bottom: 6px;
border: none;
outline: none;
border-radius: 0;
background-color: transparent;

&::placeholder {
    color: ${transparentize(0.5, '#274060')}
}

`
