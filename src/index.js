import 'dotenv/config';
import express, { request, response } from "express";
import cors from 'cors';
import eventoController from './back-end/controller/eventoController.js'
import usuarioController from './back-end/controller/usuarioController.js'

const servidor = express();

servidor.use(express.json());
servidor.use(cors())

servidor.use(usuarioController)
servidor.use(eventoController)

const port = process.env.PORT
servidor.listen(port, () => console.log(`API subiu na porta ${port}!`));
