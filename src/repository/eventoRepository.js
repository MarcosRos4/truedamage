import { connection } from "./connection";


export async function listar() {
  const comando = `
     SELECT *
       FROM evento
  `

  const [linhas] = await connection.query(comando);
  return linhas;
}