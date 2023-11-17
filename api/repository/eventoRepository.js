import { connection } from "./connection.js";


export async function listarTodos() {
  const comando =
  `
    SELECT * FROM eventos
  `
  const [linhas] = await connection.query(comando);
  return linhas;
}

export async function criar(evento) {
  const comando =
  `
    INSERT INTO eventos (nome, espaco, endereco, cep, data, horario)
    VALUES (?, ?, ?, ?, ?, ?)
  `
  const [info] = await connection.query(comando,
  [evento.nome, evento.espaco, evento.endereco, evento.cep, evento.data, evento.horario])
  evento.id = info.insertId;
  return evento;
}

export async function atualizar(evento) {
  const comando =
  `
    UPDATE eventos 
    SET nome = ?, espaco = ?, endereco = ?, cep = ?,
    data = ?, horario = ?
    WHERE ideventos = ?
  `
  const [info] = await connection.query(comando,
  [evento.nome, evento.espaco, evento.endereco, evento.cep,evento.data, evento.horario,  evento.ideventos])
  return info;
}

export async function buscarPorNome(nome) {
  const comando = 
  `
    SELECT nome, espaco, endereco, cep, capacidademaxima, data, horario
    FROM eventos
    WHERE nome like ?
  `
  const [linhas] = await connection.query(comando, ['%'+nome+'%']);
  return linhas;
}

export async function buscarPorData(data) {
  const comando = 
  `
    SELECT nome, espaco, endereco, cep, capacidademaxima, data, horario
    FROM eventos
    WHERE data like ?
  `
  const [linhas] = await connection.query(comando, ['%'+data+'%']);
  return linhas;
}

export async function buscarPorCep(cep) {
  const comando = 
  `
    SELECT nome, espaco, endereco, cep, capacidademaxima, data, horario
    FROM eventos
    WHERE cep like ?
  `
  const [linhas] = await connection.query(comando, ['%'+cep+'%']);
  return linhas;
}

export async function excluir(ideventos) {
  const comando = 
  `
    DELETE from eventos  WHERE ideventos like ?
  `
  const [linhas] = await connection.query(comando, ideventos);
  return linhas.affectedRows;
}
