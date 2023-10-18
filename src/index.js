import 'dotenv/config';
import express, { request, response } from "express";
import cors from 'cors';
import eventoController from './controller/eventoController.js'

const servidor = express();

servidor.use(express.json());
servidor.use(cors())

servidor.use(eventoController); 

const port = process.env.PORT
servidor.listen(port, () => console.log(`API subiu na porta ${port}!`));
