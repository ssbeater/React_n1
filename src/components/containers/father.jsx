import React, { useState } from 'react';
import Child from '../pure/child';

const Father = () => {

    const showMessage = (text) => {
        alert(`Message: ${text}`)
    }
    const [name, setName] = useState('San');
    const updateName = (newName) => {
        setName(newName)
    }

    return (
        <div style={{ background: 'tomato', padding: '1rem' }}>
            <Child 
                name={name} 
                send={showMessage}
                updateName={updateName}
            />
        </div>
    );
}

export default Father;
