import { connection } from "./connection.js";

export async function criar(usuario) {
  const comando =
  `
    INSERT INTO usuarios (emailusuarios, senha)
    VALUES (?, ?)
  `
  const [info] = await connection.query(comando,
  [usuario.email, usuario.senha])
  usuario.id = info.insertId;
  return usuario;
}

export async function listarTodos() {
  const comando =
  `
    SELECT emailusuarios, senha
    FROM usuarios
  `
  const [linhas] = await connection.query(comando);
  return linhas;
}

export async function atualizar(usuario) {
  const comando =
  `
    UPDATE usuarios 
    SET emailusuarios = ?, senha = ?
    WHERE idusuarios like ?
  `
  const [info] = await connection.query(comando,
  [
    usuario.email, usuario.senha, usuario.id
  ])
  return info;
}

export async function buscarPorEmail(email) {
  const comando = 
  `
    SELECT emailusuarios, senha
    FROM usuarios
    WHERE emailusuarios like ?
  `
  const [linhas] = await connection.query(comando, ['%'+email+'%']);
  return linhas;
}

export async function buscarPorId(id) {
  const comando = 
  `
    SELECT emailusuarios, senha
    FROM usuarios
    WHERE idusuarios like ?
  `
  const [linhas] = await connection.query(comando, ['%'+id+'%']);
  return linhas;
}

export async function excluir(id) {
  const comando = 
  `
    DELETE from usuarios  WHERE idusuarios like ?
  `
  const [linhas] = await connection.query(comando, id);
  return linhas.affectedRows;
}
