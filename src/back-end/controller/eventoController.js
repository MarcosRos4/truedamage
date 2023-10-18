import {
  listarTodos, criar, atualizar, buscarPorCep,
  buscarPorData, buscarPorNome, excluir
  } from "../repository/eventoRepository.js";

import { Router } from "express";


const endpoints = Router();

endpoints.get('/evento/listartodos', async (req, resp) => {
  try {
    let r = await listarTodos();
    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.post('/evento/criar', async (req, resp) => {
  try {
    let r = await 
  } catch (error) {
    
  }
})

export default endpoints;