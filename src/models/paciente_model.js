import { cnx } from "./bdatos.js";

const db = cnx.promise();

export const pacienteModel = {
  findall: async () => {
    const sql = "select * from paciente";
    const [rows] = await db.query(sql);

    return rows;
  },

  delete: async (id) => {
    const sql = "delete from paciente where idPaciente=?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  create: async (data) => {
    const sql = "insert into paciente set ?";
    const [rows] = await db.query(sql, [data]);
    return rows;
  },

  update: async (data, id) => {
    const sql = "update paciente set ? where idPaciente=?";
    const [rows] = await db.query(sql, [id, data]);
    return rows;
  },
};
