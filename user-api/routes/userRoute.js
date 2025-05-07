const express = require('express');
const router = express.Router();

router.get('/usuario', (req, res) => {
  const usuarioFicticio = {
    nome: 'João da Silva',
    email: 'joao.silva@example.com',
    idade: 25
  };

  res.status(200).json(usuarioFicticio);
});

module.exports = router;
