// modulo para conexion a la base de datos
import mysql from "mysql2";

let cnx = "";
// crear el pool de conexiones
try {
  cnx = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "hospisoft",
    port: "3306",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
} catch (error) {
  console.log(`Ha acorrido un error en la conexion: ${error.message}`);
}

// exportar la conexion
export { cnx };
