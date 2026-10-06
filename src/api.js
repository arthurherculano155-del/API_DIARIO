import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import addRoutes from './rotas.js';

const api = express();
api.use(express.json());
api.use(cors());

addRoutes(api);

const PORTA = process.env.PORTA || 9800;

api.listen(PORTA, () => console.log(`API rodando na porta ${PORTA}`));