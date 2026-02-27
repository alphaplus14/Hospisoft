import { cnx } from "./bdatos.js";

const db = cnx.promise();

export const medicoModel = {
  findall: async () => {
    const sql = "select * from medico order by nombreMedico ASC";
    const [rows] = await db.query(sql);
    return rows;
  },

  delete: async (id) => {
    const sql = "delete  from medico WHERE idMedico = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  create: async (data) => {
    const sql = "insert into medico SET ?";
    const rows = await db.query(sql, [data]);
    return rows;
  },

  update: async (id, data) => {
    const sql = "update medico SET ? WHERE idMedico = ?";
    const rows = await db.query(sql, [data, id]);
    return rows;
  },
};
