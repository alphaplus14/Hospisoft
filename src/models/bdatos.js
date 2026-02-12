// modulo para conexion a la base de datos
import mysql from "mysql2";

// crear el pool de conexiones
const cnx = mysql
  .createPool({
    host: "localhost",
    user: "root",
    database: "hospisoft",
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  })
  .promise(); // importante para usar async/await

// exportar la conexion
export { cnx };
