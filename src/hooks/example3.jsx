import React, {useState, useContext, useRef, useEffect} from 'react';

const myContext = React.createContext(null)

const Component1 = () => {
    const state = useContext(myContext)

    return (
        <div>
            <h1>The token is: {state.token}</h1>
            <Component2></Component2>
        </div>
    );
}
const Component2 = () => {
    const state = useContext(myContext)

    return (
        <div>
            <h2>The sesion is: {state.session}</h2>
        </div>
    );
}

const Example3 = () => {

    const myRef = useRef()

    const initialState = {
        token: '1234567',
        session: 1
    }

    const [sessionData, setSessionData] = useState(initialState);
    
    const updateSession = () => {
        setSessionData({
            token: 'jwt1234567',
            session: sessionData.session + 1
        })
    }
    
    useEffect(() => {
        console.log(myRef)
    }, []);

    return (
        <myContext.Provider value={sessionData}>
            <Component1></Component1>
            <button onClick={updateSession} ref={myRef}>update Session</button>
        </myContext.Provider>
    );
}

export default Example3;
