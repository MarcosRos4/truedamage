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