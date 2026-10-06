import * as DBUsers from '../../Repository/Usuario/usuarioRepository.js';
import * as Validacao from '../../Validation/Usuario/usuarioValidation.js';
import bcrypt from 'bcrypt';

export async function cadastrarUsuarioService(usuario){
    await Validacao.validarEmail(usuario.email);
    
    const senha = await bcrypt.hash(usuario.senha, 10);
    usuario.senha = senha;

    const response = await DBUsers.cadastrarUsuario(usuario);
    return response;
}

export async function usuarioLogarService(usuario){
    await Validacao.validarEmailExistente(usuario);
    const resposta = await DBUsers.usuarioLogar(usuario);

    return resposta;
}