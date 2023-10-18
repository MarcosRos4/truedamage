import { connection } from "./connection.js";


export async function listarTodos() {
  const comando = `
     SELECT *
       FROM evento
  `
  const [linhas] = await connection.query(comando);
  return linhas;
}

export async function salvar(evento) {
  const comando = `
      INSERT INTO eventos (nome, espaco, endereco,
      cep, capacidademaxima, data, horario)
      VALUES (?, ?, ?, ?, ?, ?, ?)
  `

  const [info] = await connection.query(comando,
  [evento.nome, evento.espaco, evento.endereco, evento.cep, evento.capacidademaxima])
  evento.id = info.insertId;
  
  return evento;
}

export async function buscarPorNome(nome) {
  const comando = `
    SELECT nome, espaco, endereco, cep, capacidademaxima, data, horario
    FROM tb_filme
    WHERE nome like ?
  `

  const [linhas] = await connection.query(comando, ['%'+nome+'%']);
  return linhas;
}