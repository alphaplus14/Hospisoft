import mysql from "mysql2";

let cnx = "";

try {
  cnx = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "", // Agregar tu contraseña real
    database: "hospisoft_db",
    port: "3306",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
} catch (error) {
  console.log(`Ha ocurrido un error en la conexion: ${error.message}`);
}

export { cnx };
