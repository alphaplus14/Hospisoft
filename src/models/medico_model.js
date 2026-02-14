import { cnx } from "./bdatos.js";

const db = cnx.promise();

export const medicoModel = {
  findall: async () => {
    const sql = "select * from tblmedico";
    const [rows] = await db.query(sql);
    return rows;
  },

  delete: async (id) => {
    const sql = "delete from tblmedico where idMedico=?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  create: async (data) => {
    const sql = "insert into tblmedico set ?";
    const rows = await db.query(sql, [data]);
    return rows;
  },

  update: async (data, id) => {
    const sql = "update tblmedico set ? where idMedico=?";
    const rows = await db.query(sql, [id, data]);
    return rows;
  },
};
