import React, { useState } from 'react'
import { getNumbers } from '../../services/observableService'

const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    const observer = {
        next: (newNumber) => {
            console.log(`New number: ${newNumber}`)
            setNumber(newNumber)
        },
        error: (error) =>{
            alert(`Something went wrong: ${error}`)
            console.log('Error in observable')
        },
        complete: () =>{
            console.log('Done with observable')
        }
    }

    const obtainNewNumber = () => {
        getNumbers.subscribe(observer)
    }

    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={obtainNewNumber}>Obtain new Numbers</button>
        </div>
    );
}

export default ObservableExample
