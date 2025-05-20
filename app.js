const express = require('express');
const app = express();
const port = 8081;

// Importar as rotas
let usuariosRoutes;
try {
  usuariosRoutes = require('./src/routes/usuariosRoutes.js');
} catch (error) {
  console.error("Erro ao carregar './src/routes/usuariosRoutes':", error.message);
  usuariosRoutes = null;
}

// Configurar o middleware para analisar JSON
app.use(express.json());

// Usar as rotas de usuários
if (usuariosRoutes) {
  app.use('/usuarios', usuariosRoutes);
} else {
  console.warn("Rotas de usuários não foram carregadas.");
}

// Rota padrão
app.get('/', (req, res) => {
  res.send('Servidor Online!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});