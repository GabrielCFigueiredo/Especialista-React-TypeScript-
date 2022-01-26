import { LoadingWrapper } from "./Loading.styles";

interface loadingProps {
    show?: boolean
}

export default function Loading(props: loadingProps) {

    if(!props.show)

    return null 

    
    return <LoadingWrapper>
        <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </LoadingWrapper>
}