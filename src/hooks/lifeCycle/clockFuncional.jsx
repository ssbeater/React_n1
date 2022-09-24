import React, {useState,useEffect} from 'react';

const ClockFuncional = () => {

    const initialState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San Jose'
    }
    
    const [state, setState] = useState(initialState);

    const tick = () => {
        setState((prevState) => {
            let edad = prevState.edad +1;
            if (edad === 99) edad = 0
            return {
                ...prevState,
                fecha: new Date(),
                edad
            }
        });
    }

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000)

        return () => {
            clearInterval (timerID);
        }

    }, [state]);

    return (
         <div>
            <h2>Hora Actual: {state.fecha.toLocaleTimeString()}</h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
         </div>
    )
}

export default ClockFuncional;
