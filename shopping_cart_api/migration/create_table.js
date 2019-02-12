const mysql = require('mysql2/promise');

async function createTable() {
  const connection = await mysql.createConnection({
    host: 'localhost', user: 'shop', password: 'password', database: 'shoppingcart',
  });
  const sql = 'create table products(id int auto_increment primary key,name varchar(50),price int,quantity int,imgurl varchar(500))';
  await connection.execute(sql);
  connection.close();
}

createTable();
