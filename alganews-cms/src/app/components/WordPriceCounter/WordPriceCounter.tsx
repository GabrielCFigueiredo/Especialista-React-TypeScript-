
import * as WPC from './WordPriceCounter.styles'

export interface WordPriceCounterProps {

    wordsCount: number;
    pricePerCount: number
}

export default function WordPriceCounter(props: WordPriceCounterProps){

    if(props.wordsCount < 0){
        throw Error ('A quantidade de palavras não pode ser negativa!')
    }
    return(
        <WPC.Wrapper>
            <WPC.WordCounter> {props.wordsCount} palavras </WPC.WordCounter>
            <WPC.PricePreview>{ (props.wordsCount * props.pricePerCount).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 2
            }) } </WPC.PricePreview>
        </WPC.Wrapper>
    )
}