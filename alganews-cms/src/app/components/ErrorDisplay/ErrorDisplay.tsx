import { mdiAlert } from '@mdi/js';
import Icon from '@mdi/react';
import Heading from '../Typography/Heading';

export interface ErrorDisplayProps {
    small?: boolean
    title?: string
    message?: string
}

export default function ErrorDisplay(props: ErrorDisplayProps) {
    return (
        <div style={{marginTop: '150px'}}> 
            <div style={{display: 'grid', placeItems: 'center'}}>
                <Icon
                path={mdiAlert}
                size={props.small ? '24px' : '48px'}
                />
            </div>
            <div style={{display: 'grid', placeItems: 'center'}}>
           <Heading level={2}>
                {props.title}
           </Heading>
           </div>
            <div style={{display: 'grid', placeItems: 'center'}}>
                {props.message}
            </div>
        </div>
    )
}