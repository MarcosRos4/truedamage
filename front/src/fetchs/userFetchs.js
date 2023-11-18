import { host, port } from "./common consts.js"


export async function loginUser(credentials) {
        const data = await fetch(`http://${host}:${port}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    return await data.json()
}

export async function autenticador(email) {
        try {
        const resp = await fetch(`http://${host}:${port}/usuarios/buscarpemail/${email}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        const data = await resp.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

export async function cadastrarUser(email, senha) {
        const data = await fetch(`http://${host}:${port}/usuarios/criar`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, senha})
    })
    return data
}