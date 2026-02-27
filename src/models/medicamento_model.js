//? Capa modelo para el modulo de medicamentos

//! Importamos la conexion a la base de datos
import { db } from "./bdatos.js";
//! Activar el manejo de promesas en la conexion
// const db = cnx();

//* Creamos el modulo: usando el concepto de la orientacion a objetos, creamos una clase que se encargara de manejar todo lo relacionado con los medicamentos
//* Esta clase se encargara de manejar todo lo relacionado con los medicamentos, como por ejemplo: crear, leer, actualizar y eliminar medicamentos

export const medicamentoModel = {
  //TODO: listar todos: aplicacion de funciones async para aprovechar las promesas (hilos de ejecucion)
  findall: async () => {
    const sql = "SELECT * FROM medicamento ORDER BY nombreMedicamento DESC";
    //* Ejecutamos la consulta y obtenemos los resultados almacenados en un arreglo de objetos, cada objeto representa un medicamento
    const [rows] = await db.query(sql);
    return rows;
  },
  //TODO: Buscar por id recibe el id como parametro
  findById: async (id) => {
    const sql = "SELECT * FROM medicamento WHERE idMedicamento = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  //TODO: Crear un nuevo medicamento recibe un objeto con los datos del medicamento a crear
  create: async (data) => {
    const sql = "INSERT INTO medicamento SET ?";
    const [rows] = await db.query(sql, [data]);
    return rows;
  },
  delete: async (id) => {
    const sql = "DELETE FROM medicamento WHERE idMedicamento = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  //TODO: Actualizar un medicamento recibe un objeto con los datos del medicamento a actualizar y el id del medicamento a actualizar
  update: async (id,data) => {
    const sql = "UPDATE medicamento SET ? WHERE idMedicamento =?";
    const [rows] = await db.query(sql, [data, id]);
    return rows;
  },
};
