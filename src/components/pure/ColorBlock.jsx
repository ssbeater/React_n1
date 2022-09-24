import React, { useState } from 'react';

const ColorBlock = () => {
    const [blockStyle, setBlockStyle] = useState({
        height: '255px',
        width: '255px',
        backgroundColor: 'rgb(0,0,0)'
    });
    const [changeColorEnable, setchangeColorEnable] = useState(true);
    const [changeColorInterval, setchangeColorInterval] = useState(null);

    const changeStyle = () => {
        let red = parseInt(Math.random()*255)
        let green = parseInt(Math.random()*255)
        let blue = parseInt(Math.random()*255)

        const newBackgroundColor = `rgb(${red},${green},${blue})`
        const tempBlockStyle = {...blockStyle, backgroundColor: newBackgroundColor}
        setBlockStyle(tempBlockStyle)
    }

    const onOver = () => {
        console.log('get into the block')
        if(!changeColorInterval && changeColorEnable)
            setchangeColorInterval(setInterval(changeStyle,1000))
    }

    const onLeave = () => {
        console.log('get out from block')
        clearInterval(changeColorInterval)
        setchangeColorInterval(null)
    }

    const DoubleClick = () => {
        console.log('Double Click', changeColorEnable)
        if (changeColorEnable) {
            clearInterval(changeColorInterval)
            setchangeColorInterval(null)
        } 

        if (!changeColorEnable) {
            clearInterval(changeColorInterval)
            setchangeColorInterval(setInterval(changeStyle,1000))
        }

        setchangeColorEnable(!changeColorEnable)
    }


    return (
        <div>
            <div 
                style={blockStyle}
                onMouseOver={onOver}
                onMouseLeave={onLeave}
                onDoubleClick={DoubleClick}
            />
        </div>
    );
}

export default ColorBlock;
