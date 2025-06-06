// backend/db/connection.ts
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

// Configuración de la base de datos
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '12345',
  database: process.env.DB_NAME || 'sanjuan',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Crear el pool de conexiones
const pool = mysql.createPool(dbConfig);

// Función para probar la conexión
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Conexión exitosa a la base de datos');
    connection.release();
  } catch (error) {
    console.error('❌ Error al conectar a la base de datos:', error);
    throw error;
  }
};

// Probar la conexión al iniciar
testConnection();

export default pool;