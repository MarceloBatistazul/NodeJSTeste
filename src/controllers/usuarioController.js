// controllers/usuariosController.js
const usuarioModel = require('../models/usuarioModel');

const listarUsuarios = (req, res) => {
  const usuarios = usuarioModel.getUsuarios();
  res.json(usuarios);
};

const buscarUsuario = (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarioModel.getUsuarioById(id);
  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).json({ erro: 'Usuário não encontrado' });
  }
};

const criarUsuario = (req, res) => {
  const { nome, email } = req.body;
  const novoUsuario = usuarioModel.addUsuario({ nome, email });
  res.status(201).json(novoUsuario);
};

const atualizarUsuario = (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, email } = req.body;
  const usuarioAtualizado = usuarioModel.updateUsuario(id, { nome, email });
  if (usuarioAtualizado) {
    res.json(usuarioAtualizado);
  } else {
    res.status(404).json({ erro: 'Usuário não encontrado' });
  }
};

const deletarUsuario = (req, res) => {
  const id = parseInt(req.params.id);
  const sucesso = usuarioModel.deleteUsuario(id);
  if (sucesso) {
    res.json({ mensagem: 'Usuário deletado com sucesso' });
  } else {
    res.status(404).json({ erro: 'Usuário não encontrado' });
  }
};

module.exports = { listarUsuarios, buscarUsuario, criarUsuario, atualizarUsuario, deletarUsuario };
