import {
  listarTodos, criar, atualizar, buscarPorCep,
  buscarPorData, buscarPorNome, excluir, listarShort
  } from "../repository/eventoRepository.js";

import { Router } from "express";


const endpoints = Router();
/* mostrar todos os eventos  */
endpoints.get('/evento/listartodos', async (req, resp) => {
  try {
    let r = await listarTodos();
    resp.send(r);
  }
  catch (error) {
    resp.status(400).send({
      erro: error.message
    })
  }
})

/* mostrar todos os eventos  */
endpoints.get('/evento/listarshort', async (req, resp) => {
  try {
    let r = await listarShort();
    resp.send(r);
  }
  catch (error) {
    resp.status(400).send({
      erro: error.message
    })
  }
})

/* criar evento  */
endpoints.post('/evento/criar', async (req, resp) => {
  try {
    let evento = req.body

    if (!evento.nome) {
      throw new Error("Nome do evento é obrigatório")
    }

    if (!evento.espaco) {
      throw new Error("Espaço do evento é obrigatório")
    }

    if (!evento.cep) {
      throw new Error("CEP do local do evento é obrigatório")
    }

    if (!evento.endereco) {
      throw new Error("Endereço do local do evento é obrigatório")
    }

    if (!evento.data) {
      throw new Error("Data do evento é obrigatório")
    }

    if (!evento.horario) {
      throw new Error("Horario do evento é obrigatório")
    }

    let r = await criar(evento)

    resp.send(r)

  } catch (error) {
    resp.status(400).send({
      erro: error.message
    })
  }
})

/* buscar evento por nome */
endpoints.get('/evento/buscarpnome/', async (req, resp) =>{
  try {
    let nome = req.body
    let r = await buscarPorNome(nome.nome)
    resp.send(r)
  } catch (error) {
    resp.status(400).send({
      erro: error.message
    })
  }
})

/* buscar evento por data  */
endpoints.get('/evento/buscarpdata/', async (req, resp) =>{
  try {
    let data = req.body.data
    let r = await buscarPorData(data)
    resp.send(r)
  } catch (error) {
    resp.status(400).send({
      erro: error.message
    })
  }
})

/* buscar evento por cep  */
endpoints.get('/evento/buscarpcep/:cep', async (req, resp) =>{
  try {
    let cep = req.params.cep
    let r = await buscarPorCep(cep)
    resp.send(r)
  } catch (error) {
    resp.status(400).send({
      erro: error.message
    })
  }
})

/* atualizar evento  */
endpoints.put('/evento/atualizar/:id', async (req, resp) =>{
  
  try {
    let id = req.params.id
    
    if(!id){
      throw new Error("Id é obrigatório para atualizar o evento")
    }

    let evento = req.body
    evento.ideventos = id

    let r = await atualizar(evento)
    resp.send(r)
  } catch (error) {
    resp.status(400).send({
      erro: error.message
    })
  }  
})

endpoints.delete('/evento/excluir/:id', async (req, resp) =>{
  try {
    let id = req.params.id

    if (!id) {
      throw new Error("Id é obrigatório para excluir um evento")
    }

    let r = await excluir(id)

    if (r == 0) {
      throw new Error("Evento não encontrado")
    }

    resp.send("Evento excluido com sucesso")
  } catch (error) {
    resp.status(400).send({
      erro: error.message
    })
  }
})

export default endpoints;