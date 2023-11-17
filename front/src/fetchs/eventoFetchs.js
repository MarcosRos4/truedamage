import { host, port } from "./common consts.js"

export async function getAllEventos() {
    try {
        const resp = await fetch(`http://${host}:${port}/evento/listartodos`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        const data = await resp.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

export async function deleteEventopId(id) {
    try {
        const resp = await fetch(`http://${host}:${port}/evento/excluir/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
        return resp
    } catch (err) {
        console.log(err)
    }
}