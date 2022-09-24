import React, {useState} from 'react'

const Example1 = () => {

    const initialValue = 0
    const initialPerson = {
        name: 'gridman',
        email: 'gridman@gridman.com'
    }

    const [counter, setCounter] = useState(initialValue)
    const [person, setPerson] = useState(initialPerson)

    const increaseCounter = () => setCounter(counter + 1)
    const changePerson = () => setPerson({
        name: 'Pepe',
        email: 'pepe@pepe.com'
    })

    return (
        <div>
            <h1>
            <button onClick={increaseCounter}>{counter}</button>
            </h1>
            <button onClick={changePerson}>{person.name} {person.email}</button>
        </div>
    )
}

export default Example1
