import { useEffect, useState } from 'react';
import * as CC from './CircleChart.styled'

export interface CircleChartProps  {
size: number
progress: number
caption?: string
theme?: 'primary' | 'default'
strokeWidth?: number
}

export default function CircleChart (props: CircleChartProps) {

    const getThemeColor = () => 
    
    // FUNÇÃO QUE RECUPERA A COR DO CHART COM BASE NO TEMA

        props.theme === 'primary' ? '#09f' : '#274060';

    // SETUP (CONFIGURAÇÕES DE COR, BORDA, ETC)

    const THEME = getThemeColor()

    const STROKE_WIDTH = props.strokeWidth || 8

    const STROKE_COLOR = THEME


    // MATEMATICA DA COISA

    const CENTER = props.size / 2

    const RADIUS = props.size / 2 - STROKE_WIDTH / 2

    const CIRCUMFERENCE = 2 * Math.PI * RADIUS

    // ESTADO OFFSET

    const [offset, setOffset] = useState(CIRCUMFERENCE)

    // OBSERVADOR PARA ANIMAR O OFFSET

    useEffect(() => {
        const progressOffset = ((100 - props.progress) / 100) * CIRCUMFERENCE
        setOffset(progressOffset)
    },[offset, CIRCUMFERENCE, props.progress, setOffset])
    
    return (
        <CC.Wrapper>
            <CC.SvgWrapper style={{width: props.size, height: props.size}}>
                <CC.Svg width={props.size} height={props.size}>
                    <CC.CircleBg
                    cy={CENTER}
                    cx={CENTER}
                    r={RADIUS}
                    />
                <CC.Circle
                fill= 'none'
                cy={CENTER}
                cx={CENTER}
                r={RADIUS}

                stroke={STROKE_COLOR}
                strokeWidth={STROKE_WIDTH}
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={offset}
                />
                </CC.Svg>
                <CC.Percentage style={{ color: THEME }}>
                    {Math.ceil(props.progress)}%
                </CC.Percentage>
                {
                    props.caption && <CC.Caption>
                        {props.caption}
                    </CC.Caption>
                }
            </CC.SvgWrapper>
        </CC.Wrapper>
    )
}