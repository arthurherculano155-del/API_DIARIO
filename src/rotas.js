import usuario from './Controller/Usuario/usuarioController.js';

export default function addRoutes(api){
    api.use(usuario);
}