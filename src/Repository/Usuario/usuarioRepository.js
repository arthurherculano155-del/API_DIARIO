import { con } from './connection.js';

export async function cadastrarUsuario(usuario){
    const command = `
        insert into usuario(nome, email, senha)
        values(?, ?, ?)
    `

    const [resposta] = await con.query(command, [
        usuario.nome,
        usuario.email,
        usuario.senha
    ])

    return resposta.insertId;
}

export async function getEmail(email){
    const command = `
        select * from usuario
        where email = ?
    `

    const [resposta] = await con.query(command, [email]);

    return resposta[0];
}

export async function usuarioLogar(usuario){
    const command = `
        select * from usuario
        where email = ? 
    `

    const [response] = await con.query(command, [
        usuario.email,
        usuario.senha
    ]);

    return response;
}