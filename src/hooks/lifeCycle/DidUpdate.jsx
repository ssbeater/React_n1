import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

    componentDidUpdate() {
        console.log('Behavior before update component to the DOM, new props or state change')
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}

export const DidUpdateHook = () => {
    useEffect(() => {
        console.log('Behavior before update component to the DOM, new props or state change')
    });

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}