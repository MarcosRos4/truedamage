const port = process.env.PORT

export async function autenticador(email) {
        try {
        const resp = await fetch(`http://20.195.205.69:${port}/usuarios/buscarpemail/${email}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        const data = await resp.json()
        return data
    } catch (err) {
        console.log(err)
    }
}