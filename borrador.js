//? Capa modelo para el modulo de medicamentos

import { cnx } from "./bdatos.js";

const db = cnx.promise();

export const medicamentoModel = {
  findall: async () => {
    const sql = `
      SELECT 
        m.idMedicamento,
        m.nombreMedicamento,
        m.cantidadMedicamento,
        m.precioMedicamento,
        m.Entrada_idmovimientosMedicamentos,
        e.fechaMovimiento,
        e.tipoMovimiento
      FROM medicamento m
      INNER JOIN entrada e ON m.Entrada_idmovimientosMedicamentos = e.idmovimientosMedicamentos
      ORDER BY m.nombreMedicamento ASC
    `;
    const [rows] = await db.query(sql);
    return rows;
  },

  findById: async (id) => {
    const sql = `
      SELECT 
        m.idMedicamento,
        m.nombreMedicamento,
        m.cantidadMedicamento,
        m.precioMedicamento,
        m.Entrada_idmovimientosMedicamentos,
        e.fechaMovimiento,
        e.tipoMovimiento
      FROM medicamento m
      INNER JOIN entrada e ON m.Entrada_idmovimientosMedicamentos = e.idmovimientosMedicamentos
      WHERE m.idMedicamento = ?
    `;
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  create: async (data) => {
    const sql = "INSERT INTO medicamento SET ?";
    const [rows] = await db.query(sql, [data]);
    return rows;
  },

  delete: async (id) => {
    const sql = "DELETE FROM medicamento WHERE idMedicamento = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  update: async (id, data) => {
    const sql = "UPDATE medicamento SET ? WHERE idMedicamento = ?";
    const [rows] = await db.query(sql, [data, id]);
    return rows;
  },
};
