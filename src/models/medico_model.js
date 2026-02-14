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

  create:async()=>{
    const sql="insert into tblmedico"
  }
};
