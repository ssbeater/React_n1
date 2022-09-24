import React from 'react';

const AsyncExample = () => {

    const generateNumber = async () => {
        return 1 //
    }

    const generatePromiseNumber = async () => {
        return Promise.resolve(2)
    }

    const obtainNumber = () => {
        generateNumber()
            .then(res => alert(`Response: ${res}`))
            .catch(err => alert(`Something went wrong: ${err}`))
    }

    const obtainPromiseNumber = () => {
        generatePromiseNumber()
            .then((res) => alert(`Response: ${res}`))
            .catch(err => alert(`Something went wrong: ${err}`))
    }

    const saveSessionStorage = async (key,value) => {
        sessionStorage.setItem(key,value)
        return Promise.resolve(sessionStorage.getItem(key))
    }

    const showStorage = () => {
        saveSessionStorage('name', 'San')
            .then(res => {
                let value = res
                alert(`Saved Name: ${value}`)
            }).catch(err => {
                alert(`Something went wrong: ${err}`)
            }).finally(() => {
                console.log('Name saved and retreived sucessfully')
            })
    }

    const obtainMessage = async () => {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello World'), 2000)
        })

        let message = await promise
        await alert(`Message received: ${message}`)
    }

    const returnError = async () => {
        await Promise.reject(new Error('Ooops!'))
    }

    const consumeError = () => {
        returnError()
            .then(res => alert(`Everything is OK: ${res}`))
            .catch(err => alert(`Somthing went wrong: ${err}`))
            .finally(() => console.log(`Finally executed`))
    }

    const urlnotFound = async () => {
        try {
            let res = await fetch('https://invalidURL')
            alert(`Response: ${JSON.stringify(res)}`)
        } catch (error) {
            alert(`Somthing went wrong with your URL: ${error}`)
        } finally {
        }
    }

    const multiplePromise = async () => {
        let results = await Promise.all(
            [
                fetch('https://regres.in/api/users'),
                fetch('https://regres.in/api/users?page=2')
            ]
        ).catch(err => 
            alert(`Something went wrong with your URLs: ${err}`)
        )

        console.log(results)
    }

    return (
        <div style={{margin: '20px'}}>
            <div>
                <button onClick={obtainNumber}>Get number</button>
                <button onClick={obtainPromiseNumber}>Get promise number</button>
                <button onClick={showStorage}>Save session</button>
            </div>
            <div>
                <button onClick={obtainMessage}>Send Message</button>
                <button onClick={consumeError}>Consume Error</button>
                <button onClick={urlnotFound}>Request to invalid URL</button>
            </div>
            <div>
                <button onClick={multiplePromise}>Multiple Promise</button>
            </div>
        </div>
    );
}

export default AsyncExample;
