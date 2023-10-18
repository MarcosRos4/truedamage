import { buscarPorNome, listar, remover, salvar } from "../repository/eventoRepository.js";

import { Router } from "express";


const endpoints = Router();

endpoints.get('/nome', async (req, resp) => {
  try {
    let r = await listar();
    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

export default endpoints;