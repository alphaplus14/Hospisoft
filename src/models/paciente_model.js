import { cnx } from "./bdatos.js";

const db = cnx.promise();

export const pacienteModel = {
  findall: async () => {
    const sql = "select * from tblpaciente";
    const [rows] = await db.query(sql);

    return rows;
  },

  delete: async (id) => {
    const sql = "delete from tblpaciente where idPaciente=?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  create: async (data) => {
    const sql = "insert into tblpaciente set ?";
    const [rows] = await db.query(sql, [data]);
    return rows;
  },

  update: async (data, id) => {
    const sql = "update tblpaciente set ? where idPaciente=?";
    const [rows] = await db.query(sql, [id, data]);
    return rows;
  },
};
