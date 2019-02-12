const express = require('express');
const db = require('../controller/controller');

const router = express.Router();

router.get('/api/products', async (req, res) => {
  console.log('/api/products');
  const data = await db.getProducts();
  res.json(data);
});

router.put('/api/products/', async (req, res) => {
  const data = await db.updateProducts(req.body);
  res.json({ message: data });
});

module.exports = router;
