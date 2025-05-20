// routes/usuariosRoutes.js
const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarioController');

// Rota GET - listar todos os usuários
router.get('/', usuariosController.listarUsuarios);

// Rota GET - buscar um usuário por ID
router.get('/:id', usuariosController.buscarUsuario);

// Rota POST - criar um novo usuário
router.post('/', usuariosController.criarUsuario);

// Rota PUT - atualizar um usuário
router.put('/:id', usuariosController.atualizarUsuario);

// Rota DELETE - deletar um usuário
router.delete('/:id', usuariosController.deletarUsuario);

module.exports = router;
