import { cnx } from "./bdatos.js";

const db = cnx.promise();

export const usuarioModel = {
  findall: async () => {
    const sql = "select * from usuario";
    const [rows] = await db.query(sql);

    return rows;
  },

  delete: async (id) => {
    const sql = "delete from usuario where idUsuario=?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  create: async (data) => {
    const sql = "insert into usuario set ?";
    const [rows] = await db.query(sql, [data]);
    return rows;
  },

  update: async (data, id) => {
    const sql = "update usuario set ? where idUsuario=?";
    const [rows] = await db.query(sql, [id, data]);
    return rows;
  },
};
