// models/usuarioModel.js
let usuarios = [];
let idAtual = 1;

const getUsuarios = () => usuarios;
const getUsuarioById = (id) => usuarios.find(u => u.id === id);
const addUsuario = (usuario) => {
  const novoUsuario = { id  : idAtual++, ...usuario };
  usuarios.push(novoUsuario);
  return novoUsuario;
};
const updateUsuario = (id, novoUsuario) => {
  const usuario = usuarios.find(u => u.id === id);
  if (usuario) {
    usuario.nome = novoUsuario.nome;
    usuario.email = novoUsuario.email;
    return usuario;
  }
  return null;
};
const deleteUsuario = (id) => {
  const index = usuarios.findIndex(u => u.id === id);
  if (index !== -1) {
    usuarios.splice(index, 1);
    return true;
  }
  return false;
};

module.exports = { getUsuarios, getUsuarioById, addUsuario, updateUsuario, deleteUsuario };
