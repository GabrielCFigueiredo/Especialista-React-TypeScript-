import { useEffect, useState } from "react"
import React from 'react'

export default function Clock () {

    const [time, setTime] = useState<Date>()

    useEffect(() => {
       setInterval(()=> {
        setTime(new Date())
       },1000)
    },[])
    return(
        <div style={{fontSize: 100}}>
            agora : {time?.toLocaleTimeString()}
        </div>
    )
}