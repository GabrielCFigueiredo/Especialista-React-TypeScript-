import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Comfirn from '../../app/components/Comfirn/Comfirn';


interface ConfirmProps {
    title: string
    onConfirm?: () => any
    onCancel?: () => any
}

export default function Confirm( props: ConfirmProps) {

  setTimeout(() => {

    confirmAlert({
  
        overlayClassName: 'confirm-overlay',
        customUI: ({ onClose }) => {
          return (
            <Comfirn
            title={props.title}
            onConfirm={() => {
                if(props.onConfirm)
                props.onConfirm()
                onClose()
            }}
            onCancel={() => {
                if(props.onCancel)
                props.onCancel()
                onClose()
            }}
            
            />
          );
        }
      });
  }, 0)

}