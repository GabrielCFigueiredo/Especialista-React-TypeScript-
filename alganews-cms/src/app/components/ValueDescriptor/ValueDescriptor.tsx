import * as VD from './ValueDescriptor.styles'
import { ColorSpan, SpanCurrency, SpanLabel } from './ValueDescriptor.styles'


export interface ValueDescriptorProps {
label: string,
value: number,
color: 'primary' | 'default'
isCurrency?: boolean
}

export default function ValueDescriptor({label, value, color, isCurrency} : ValueDescriptorProps) {

    const COLORS = {
        primary: '#0099ff',
        default: '#274060'
      }
    return < VD.Wrapper color={COLORS[ color || 'default']}>
    <SpanLabel>{ label }:</SpanLabel>
    <div>
{
    isCurrency &&
        <SpanCurrency>{ 'R$' }</SpanCurrency>
}
        
        <ColorSpan>
        {value.toLocaleString('pt-br')}
        </ColorSpan>
    </div>
    
    </VD.Wrapper>
}