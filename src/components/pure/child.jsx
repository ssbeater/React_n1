import React, { useRef } from 'react';

const Child = ({ name, send, updateName }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')
    const pressButton = () => {
        const text = messageRef.current.value
        alert(`Current Text: ${text}`)
    }
    const pressButtonParms = (text) => {
        alert(`Text: ${text}`)
    }
    const mouseOver = () => {
        console.log(`Mouse Over`)
    }

    const submitName = (e) => {
        e.preventDefault()
        updateName(nameRef.current.value)
        nameRef.current.value = ''
    }

    return (
        <div style={{ background: 'cyan', padding: '1rem' }}>
            <p onMouseOver={() => mouseOver()}>Hello, {name}</p>
            <button onClick={pressButton}>Button 1</button>
            <button onClick={() => pressButtonParms('Hello')}>Button 2</button>
            <input 
                placeholder='Insert a text' 
                onFocus={() => console.log('Input Focus')}
                onChange={(e) => console.log('Inpunt changed: ', e.target.value)}
                onCopy={() => console.log('Copied Text from Input')}
                onPaste={() => console.log('Text Pasted')}
                ref={messageRef}
            />
            <button onClick={() => send(messageRef.current.value)}>Send Message</button>
            <div style={{ padding: '1rem 0' }}>
                <form onSubmit={submitName}>
                    <input 
                        placeholder='Name'
                        ref={nameRef}
                    />
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
