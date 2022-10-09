

export const getAllUsers = async () => {
    let res = await fetch('https://reqres.in/api/users')
    console.log('Respons: ',res)
    console.log('Status: ',res.status)
    console.log('OK: ',res.ok)

    // Return response
    return res.json()
}

export const getAllPagedUsers = async (page) => {
    let res = await fetch(`https://reqres.in/api/users?page=${page}`)
    console.log('Respons: ',res)
    console.log('Status: ',res.status)
    console.log('OK: ',res.ok)

    // Return response
    return res.json()
}

export const getUserDetails = async (id) => {
    let res = await fetch(`https://reqres.in/api/users/${id}`)
    console.log('Respons: ',res)
    console.log('Status: ',res.status)
    console.log('OK: ',res.ok)

    // Return response
    return res.json()
}

export const login = async (email, password) => {
    let body = {
        email,
        password
    }

    let res = await fetch(`https://reqres.in/api/login`, {
        method: 'POST',
        //mode: 'no-cors',
        //credentials: 'omit',
        //cache: 'no-cache',
        //headers: {
        //    'Content-type': 'application/json'
        //},
        body: JSON.stringify(body)
    })

    console.log('Respons: ',res)
    console.log('Status: ',res.status)
    console.log('OK: ',res.ok)

    return res.json()
}