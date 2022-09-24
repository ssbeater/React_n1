import React, { useEffect } from 'react';

export const AllCyclesHook = () => {
    useEffect(() => {
        console.log('Created')

        const intervalID = setInterval(() => {
            document.title = `${new Date()}`
            console.log('Update component')
        }, 1000)

        return () => {
            console.log('will unmount')
            document.title = 'time stopped'
            clearInterval(intervalID)
        };
    }, []);

    return (
        <div>
        </div>
    );
}