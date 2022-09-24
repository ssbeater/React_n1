import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount() {
        console.log('Behavior before add component to the DOM')
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

export const DidMountHook = () => {

    useEffect(() => {
        console.log('Behavior before add component to the DOM')
    }, []);

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}
