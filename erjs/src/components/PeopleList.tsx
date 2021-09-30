import useCounter from "../hooks/useCounter";
import React from "react";

export default function PeopleList () {
    const {people, AddPerson} = useCounter()

    return <div>
    <ul>
        {people.map(person =>  <li key={person}>{person}</li> )}
    </ul>
    <button onClick={() => AddPerson('Gabriel')}>
        adicionar 
    </button>
    </div>
}