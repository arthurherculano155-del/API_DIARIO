import * as Service from '../../Service/Usuario/usuarioService.js';
import { Router } from "express";
const endpoints = Router();

endpoints.post('/usuario', async (req, resp) => {
    try {
        const usuario = req.body;
        const resposta = await Service.cadastrarUsuarioService(usuario);

        resp.send({
            ID: resposta
        });
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/usuario/logar', async (req, resp) => {
    try{
        const usuario = req.body;
        
    }
    catch(err){

    }
})

export default endpoints;