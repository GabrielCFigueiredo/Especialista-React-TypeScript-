import { useEffect, useState } from "react"

export default function useCounter () {

    const [people, setPeople] = useState(['Daniel, Fernando'])


    const AddPerson = (name: string) => {
        setPeople([...people, name])
    }

    return {
        people,
        AddPerson
    }

    

}