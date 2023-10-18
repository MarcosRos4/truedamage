import { connection } from "./connection.js";


export async function listar() {
  const comando = `
     SELECT *
       FROM evento
  `

  const [linhas] = await connection.query(comando);
  return linhas;
}