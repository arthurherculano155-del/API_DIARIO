import bcrypt from 'bcrypt';
import * as DBUsers from '../../Repository/Usuario/usuarioRepository.js'

export async function validarEmail(email){
    const emailUser = await DBUsers.getEmail(email);
    
    if(emailUser != null)
        throw new Error("Usuário cadastrado!");

    if(!email.includes("@") || !email.includes("."))
        throw new Error("Email inválido"); 
}

export async function validarEmailExistente(usuario){
    const emailUser = await DBUsers.getEmail(usuario.email);
    const senha = await DBUsers.usuarioLogar(usuario.senha)

    const senhaCorreta = await bcrypt.compare(
        usuario.senha,
        senha
    );

    if(emailUser === null)
        throw new Error("Email ou senha inválidos!");

    if(!senhaCorreta)
        throw new Error("Email ou senha inválidos!");
}