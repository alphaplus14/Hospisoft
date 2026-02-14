//? Capa modelo para el modulo de medicamentos

//! Importamos la conexion a la base de datos
import { cnx } from "./bdatos.js";

//! Activar el manejo de promesas en la conexion
const db = cnx.promise();

//* Creamos el modulo: usando el concepto de la orientacion a objetos, creamos una clase que se encargara de manejar todo lo relacionado con los medicamentos
//* Esta clase se encargara de manejar todo lo relacionado con los medicamentos, como por ejemplo: crear, leer, actualizar y eliminar medicamentos

export const medicamentoModel = {
  //TODO: listar todos: aplicacion de funciones async para aprovechar las promesas (hilos de ejecucion)
  findALL: async () => {
    const sql = "SELECCT * FROM tblmedicamento ORDER BY nombreMedicamento DESC";
    //* Ejecutamos la consulta y obtenemos los resultados almacenados en un arreglo de objetos, cada objeto representa un medicamento
    const [rows] = await db.query(sql);
    return rows;
  },
  //TODO: Buscar por id recibe el id como parametro
  findALLById: async (id) => {
    const sql = "SELECT * FROM tblmedicamento WHERE idMedicamentos = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  //TODO: Crear un nuevo medicamento recibe un objeto con los datos del medicamento a crear
  create: async (data) => {
    const sql = "INSERT INTO tblmedicamento SET ?";
    const [rows] = await db.query(sql, [data]);
    return rows;
  },
  delete: async (id) => {
    const sql = "DELETE FROM tblmedicamento WHERE idMedicamentos = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  //TODO: Actualizar un medicamento recibe un objeto con los datos del medicamento a actualizar y el id del medicamento a actualizar
  update: async (data, id) => {
    const sql = "UPDATE tblmedicamento SET ? WHERE idMedicamentos =?";
    const [rows] = await db.query(sql, [data, id]);
    return rows;
  },
};
