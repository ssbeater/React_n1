import React, {useState} from 'react';

let red = 0
let green = 200
let blue = 150

const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight: 'bold'
}
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}

const LoginButton = ({loginAction, propStyle}) => <button style={propStyle} onClick={loginAction}>Login</button>
const LogoutButton = ({logoutAction, propStyle}) => <button style={propStyle} onClick={logoutAction}>Logout</button>

// ? (true) && expresion => se renderiza la expresion
// ? (false) && expresion => no se renderiza la expresion


const OptionalRender = () => {
    const [access, setAccess] = useState(true);
    const [nMessage, setnMessage] = useState(0);
    const loginAction = () => {
        setAccess(true)
    }
    const logoutAction = () => {
        setAccess(false)
    }

    let optionalButton;

    if(access) optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>
    else optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton> 

    const addMessages = () => {
        setnMessage(nMessage + 1)
    }

    return (
        <div>
            {optionalButton}
            <p></p>
            {access ?
                <div>
                    { nMessage > 0 ? 
                        <p>You have new message{nMessage === 1 ? '':'s'}</p> : 
                        <p>There are no new messages</p>
                    }
                    <button onClick={addMessages}>addMessages</button>
                </div>:
                null
            }
        </div>
    );
}

export default OptionalRender;
