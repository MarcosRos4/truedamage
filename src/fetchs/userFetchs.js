export async function loginUser(credentials) {
        const data = await fetch(`http://localhost:1810/login`, {
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
        const resp = await fetch(`http://localhost:1810/usuarios/buscarpemail/${email}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        const data = await resp.json()
        return data
    } catch (err) {
        console.log(err)
    }
}