require('dotenv').config()
const mysql = require('mysql2')
const connection =  mysql.createConnection(process.env.DATABASE_URL)
console.log(connection)
async function createTable() {
  try {
    await connection.execute(`
      CREATE TABLE plants (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        image_url VARCHAR(255),
        specie VARCHAR(255)
      )
    `);

    console.log('Table created successfully!');
  } catch (error) {
    console.error(error);
  } finally {
    await connection.end();
  }
}

createTable();
// connection.end()