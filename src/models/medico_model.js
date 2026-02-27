import { cnx } from "./bdatos.js";

const db = cnx.promise();

export const medicoModel = {
  findall: async () => {
    const sql = "select * from medico";
    const [rows] = await db.query(sql);
    return rows;
  },

  findById: async (id) => {
    const sql = "SELECT * FROM medico WHERE idMedicamento = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  delete: async (id) => {
    const sql = "delete from medico where idMedico=?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  create: async (data) => {
    const sql = "insert into medico set ?";
    const rows = await db.query(sql, [data]);
    return rows;
  },

  update: async (data, id) => {
    const sql = "update medico set ? where idMedico=?";
    const rows = await db.query(sql, [id, data]);
    return rows;
  },
};
