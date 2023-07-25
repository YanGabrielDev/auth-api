const dotenv = require('dotenv');
const mysql = require('mysql2/promise');

dotenv.config();

export async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection(process.env.DATABASE_URL);
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:');
    throw error;
  }
}

async function createTable() {
  const connection = await connectToDatabase();
  try {
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id int NOT NULL AUTO_INCREMENT,
        name VARCHAR(255),
        image_url VARCHAR(255),
        email VARCHAR(255),
        password VARCHAR(255),
        country VARCHAR(255),
        PRIMARY KEY (id)
      )
    `);

    console.log('Table created successfully!');
  } catch (error) {
    console.error('Error creating table:');
  } finally {
    await connection.end();
  }
}

createTable();