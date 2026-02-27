import { cnx } from "./bdatos.js";

const db = cnx.promise();

export const pacienteModel = {

  findall: async () => {
    const sql = "SELECT * FROM paciente ORDER BY nombrePaciente ASC";
    const [rows] = await db.query(sql);
    return rows;
  },

  findById: async (id) => {
    const sql = "SELECT * FROM paciente WHERE idPaciente = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  create: async (data) => {
    const sql = "INSERT INTO paciente SET ?";
    const [rows] = await db.query(sql, [data]);
    return rows;
  },

  delete: async (id) => {
    const sql = "DELETE FROM paciente WHERE idPaciente = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },


  update: async (id, data) => {
    const sql = "UPDATE paciente SET ? WHERE idPaciente = ?";
    const [rows] = await db.query(sql, [data, id]);
    return rows;
  },
};
