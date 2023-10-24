import { excluir, criar, atualizar, listarTodos, buscarPorEmail, buscarPorId } from "../repository/usuarioRepository.js";

import { Router } from "express";

const endpoints = Router();

/* criar usuario */
endpoints.post('/usuarios/criar', async (req, resp) =>{
    try {
        let usuario = req.body

        if (!usuario.email) {
            throw new Error("Email de usuário é obrigatório")
        }

        if (!usuario.senha) {
            throw new Error("Senha de usuario é obrigatória")
        }

        let r = await criar(usuario)
        resp.send(r)
    } catch (error) {
        resp.status(400).send({
          erro: error.message
        }) 
    }
})

/* mostrar todos os usuarios */
endpoints.get('/usuarios/mostrartodos', async (req, resp) =>{
    try {
        let r = await listarTodos()
        resp.send(r)
    } catch (error) {
        resp.status(400).send({
          erro: error.message
        }) 
    }
})

/* buscar por email */
endpoints.get("/usuarios/buscarpemail/:email", async (req, resp) =>{
    try {
        let email = req.params.email
        if (!email) {
            throw new Error("Email invalido")
        }
        let r = await buscarPorEmail(email)

        resp.send(r)

    } catch (error) {
        resp.status(400).send({
          erro: error.message
        }) 
    }
})

/* buscar por id */
endpoints.get('/usuarios/buscarpid/:id', async (req, resp) =>{
    try {
        let id = req.params.id
        if (!id) {
            throw new Error("Id invalido")
        }
        let r = await buscarPorId(id)

        resp.send(r)

    } catch (error) {
        resp.status(400).send({
          erro: error.message
        }) 
    }
})

/* atualizar */
endpoints.put('/usuarios/atualizar/:id', async (req, resp) =>{
    try {
        let id = req.params.id

        if (!id) {
            throw new Error("Id invalido")
        }

        let usuario = req.body
        usuario.id = id

        let r = await atualizar(usuario)
        resp.send(r)

    } catch (error) {
        resp.status(400).send({
          erro: error.message
        })
    }
})

/* excluir */
endpoints.delete('/usuarios/excluir/:id', async (req, resp) =>{
    try {
        let id = req.params.id

        if (!id) {
            throw new Error("Id é obrigatório para excluir um usuario")
        }

        let r = await excluir(id)

        if (r == 0) {
          throw new Error("Usuário não encontrado")
        }

        resp.send("Evento excluido com sucesso")
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

export default endpoints
