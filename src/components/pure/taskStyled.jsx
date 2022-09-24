import React, { useState } from 'react';

const loggedStyle = {
    color: 'cyan'
}

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const TaskStyled = (props) => {
    const [logged, setLogged] = useState(false);

    const greetingUser = () => (<p>Welcome to the App, {props.name}</p>)
    const pleaseLogin = () => (<p>Please, Login</p>)

    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
            {logged ? greetingUser() : pleaseLogin() }
            <button onClick={() => setLogged(!logged)}>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default TaskStyled;
