import styled from 'styled-components'

export const Wrapper = styled.div<{ color: string }> ` 
display: flex;
flex-direction: column;
color: ${p => p.color};
`

export const ColorSpan = styled.span ` 
font-size: 18px;
font-weight: 800;
color: ${p => p.color};
`
export const SpanCurrency = styled.span ` 
color: ${p => p.color};
`

export const SpanLabel = styled.span ` 
font-size: 12px;
text-transform: lowercase;
`



