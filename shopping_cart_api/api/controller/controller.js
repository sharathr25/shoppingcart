const mysql = require('mysql2/promise');

async function executeQuery(sql, parameters) {
  const connection = await mysql.createConnection({
    host: 'localhost', user: 'shop', password: 'password', database: process.env.DATABASE || 'shoppingcart',
  });
  const data = await connection.execute(sql, parameters);
  connection.close();
  return data[0];
}

async function getProductsFromDb() {
  const sql = 'select * from products';
  let data;
  try {
    data = await executeQuery(sql);
  } catch (err) {
    console.log('error happend', err);
  }
  return data;
}

async function updateProductsInDb(products) {
  for (let i = 0; i < products.length; i += 1) {
    const sql = 'update products set quantity=? where id=?';
    executeQuery(sql, [products[i].quantity - products[i].selected, products[i].id]);
  }
  return 'products updated';
}

module.exports = {
  getProducts: getProductsFromDb,
  updateProducts: updateProductsInDb,
};
