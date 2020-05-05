const { Router } = require('express');


const animalController = require('./controllers/animaisController');
const usuariosCotroller = require('./controllers/usuariosController');
const sessionsController = require('./controllers/sessionsController');

const routes = Router();

//Rota para sessions
routes.post('/sessions', sessionsController.create);

//Rotas dos animais
routes.get('/animais', animalController.index);
routes.get('/animais/animal/:id', animalController.animal);

//Rota dos usuários
routes.get('/usuarios', usuariosCotroller.index);
routes.get('/animais/dono/:id', usuariosCotroller.usuario);
routes.put('/usuarios/novo', usuariosCotroller.create);
routes.post('/usuarios/atualizar/:id', usuariosCotroller.update);
routes.delete('/usuarios/excluir/:id', usuariosCotroller.delete);
routes.get('/usuarios/animais', animalController.index_usuario);
routes.put('/usoarios/adicionar/animal', animalController.create);
routes.post('/usuarios/atualizar/animal/:id', animalController.update);
routes.delete('/usuarios/animais/excluir/:id', animalController.delete);

module.exports = routes;