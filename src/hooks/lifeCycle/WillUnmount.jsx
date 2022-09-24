import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {

    componentWillUnmount() {
        console.log('Behavior before component will be unmounted')
    }

    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        );
    }
}

export const WillUnmountHook = () => {
    useEffect(() => {
        return () => {
            console.log('Behavior before component will be unmounted')
        };
    }, []);

    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    );
}