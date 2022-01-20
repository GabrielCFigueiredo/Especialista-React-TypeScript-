import styled from 'styled-components'
import React from 'react'
import Button from '../Button/Button'

export interface ComfirnProps{
    title: string
  onConfirm: () => any
  onCancel: () => any
    
}

export default function Comfirn( props : ComfirnProps) {
    return <ComfirnWrapper>
        <div>
            { props.title }
        </div>
        <div>     
        <Button style={{margin:'5px'}}
        label="Não"
        variant="danger"
        onClick={props.onCancel}
        />
        <Button style={{margin:'5px'}}
        label="Sim"
        variant="primary"
        onClick={props.onConfirm}
        />
        </div>
    </ComfirnWrapper>
}

const ComfirnWrapper = styled.div `
    display: flex;
    flex-direction: column;
    padding: 24px;
    align-items: center;
    justify-content: center;
    background-color: #F3F8FA;
    width: 250px;
`
