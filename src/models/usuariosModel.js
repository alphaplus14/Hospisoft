import { cnx } from "./bdatos.js";

const db = cnx.promise();

// Modelo de usuarios

export const UsuariosModel = {

  // Obtener todos los usuarios
  findallUsuario: async () => {     
    const sql = "SELECT * FROM tblusuario";
    const [rows] = await db.query(sql);
    return rows;    
  },

  // Buscar usuario por id
  findByIdUsuario: async (id) => {
    const sql = "SELECT * FROM tblusuario WHERE idtblUsuario=?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  // Eliminar usuario por id
  deleteByIdUsuario: async (id) => {
    const sql = "DELETE FROM tblusuario WHERE idtblUsuario=?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  // Crear nuevo usuario
  createUsuario: async (data) => {
    const sql = "INSERT INTO tblusuario SET ?";
    const [rows] = await db.query(sql, data);
    return rows;
  },

  // Actualizar usuario
  updateUsuario: async (id, data) => {
    const sql = "UPDATE tblusuario SET ? WHERE idtblUsuario=?";
    const [rows] = await db.query(sql, [data, id]);
    return rows;
  }

}