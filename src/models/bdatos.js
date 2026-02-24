import mysql from "mysql2";

let cnx = "";

try {
  cnx = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "tu_contraseña_aqui", // ✅ Agregar tu contraseña real
    database: "hospisoft",
    port: "3306",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
} catch (error) {
  console.log(`Ha ocurrido un error en la conexion: ${error.message}`);
}

export { cnx };
