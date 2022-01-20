import { Component } from "react";
import ErrorDisplay from "./ErrorDisplay/ErrorDisplay";


interface props {
    component?: string
}
interface State {
    hasError: boolean
    error?: {
        message: string
    }
}


export default class ErrorBouny extends Component<props, State> {
    public state: State = {
        hasError: false
    }

    public static getDerivedStateFromError(error: Error): State {
        return {
            hasError: true,
            error: {
                message: error.message
            }
        }
    }

    public render(){
        
        if(this.state.hasError){
            return <div>
            <ErrorDisplay
            title={`Erro ao renderizar ${this.props.component || 'component'}  `}
            message={this.state.error?.message}
            />
            </div>
        }
        return this.props.children
    }
}