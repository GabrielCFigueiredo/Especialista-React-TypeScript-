import styled from "styled-components";



export interface FieldDescriptorProps {
    label: string
    value: string | number | undefined
}

export default function FieldDescriptor({ label, value } : FieldDescriptorProps) {

   
    
    return<StyledFielDescriptor>
        { label }:
    <StyledDescriptor>
        { value }
    </StyledDescriptor>
    </StyledFielDescriptor>
}

const StyledFielDescriptor= styled.p`
 font-size: 12px;
 color: #274060;
 font-family: Lato, sans-serif;
 font-weight: 700;
`

const StyledDescriptor= styled.p`
 font-size: 16px;
 color: #274060   
`