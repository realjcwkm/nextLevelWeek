import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

import {errors} from 'celebrate';

const app = express();

//Colocar o dominio no cors() atraves do { origin: 'dominio'}
app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);

/**
 * Funcionalidades da aplicacao
 * do servidor web:
    * Cadastro de ponto de coleta
    * Listar os itens de coleta
* da aplicacao mobile:
    * Listar os pontos de coleta (filtrar por estado/cidade/itens)
    * Listar um ponto de coleta especifico
 */