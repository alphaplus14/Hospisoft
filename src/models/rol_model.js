import { cnx } from "bdatos.js";

const db = cnx.promise();

export const rolModel = {
  findall: async () => {
    const sql = "select * from rol";
    const [rows] = await db.query(sql);

    return rows;
  },
  findbyid: async () => {
    const sql = "select * from rol where idRol=?";
    const [rows] = await db.query(sql);
    return rows;
  },

  delete: async (id) => {
    const sql = "delete from rol where idRol=?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  create: async (data) => {
    const sql = "insert into rol set ?";
    const [rows] = await db.query(sql, [data]);
    return rows;
  },

  update: async (data, id) => {
    const sql = "update rol set ? where idRol=?";
    const [rows] = await db.query(sql, [id, data]);
    return rows;
  },
};
