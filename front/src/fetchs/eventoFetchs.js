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

export async function getShortEventos() {
    try {
        const resp = await fetch(`http://${host}:${port}/evento/listarshort`, {
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

export async function atualizaEventoPorId(id, body) {
    try {
        const resp = await fetch(`http://${host}:${port}/evento/atualizar/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return resp;
    } catch (err) {
        console.log(err);
    }
}

export async function criarEventoApi(body) {
    try {
        const resp = await fetch(`http://${host}:${port}/evento/criar`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        return resp
    } catch (err) {
        console.log(err)
    }
}