const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

  const dynamicDate = new Date()

  res.json({
    title: 'Teste de API',
    ano: '2021',
    version: '1.0.0',
    date: dynamicDate.toDateString()
  });
});

module.exports = router;

