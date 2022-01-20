import { forwardRef, PropsWithChildren, useImperativeHandle, useRef } from "react";

type ScrollProps = PropsWithChildren <{
    width: number,
    height: number
}>

export default forwardRef<HTMLDivElement, ScrollProps>((props, ref) => {


    return (
        <div
        

        // sem useImperativeHandle
        ref={ref}
        style={{
            width: props.width,
            height: props.height,
            overflow: 'auto',
            margin: '24px auto',
            border: '1px red'
        }}
        >
            { props.children }
        </div>
    )

})