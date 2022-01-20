import { InputHTMLAttributes } from 'react'
import * as I from './Input.styles'
import { Label } from './Input.styles'
import { CampInput } from './Input.styles'


export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

    label ?: string
}

export default function Input({ label, ...props } : InputProps) {

    return < I.Wrapper>
{
    label && 

   <Label>
       { label }:
   </Label>
}
    <CampInput 
    {...props}
    type= 'text'
    />
    </I.Wrapper>
}