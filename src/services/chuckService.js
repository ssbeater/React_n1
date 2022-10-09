
export const getRandomJoke = async () => {
    let reqName = 'GetRandomJoke'

    let res = await fetch(`https://api.chucknorris.io/jokes/random`,{
        method: 'GET',
        mode: 'cors'
    })

    console.log(reqName,'-Response: ',res)
    console.log(reqName,'-Status: ',res.status)
    console.log(reqName,'-OK: ',res.ok)

    return res.json()
}