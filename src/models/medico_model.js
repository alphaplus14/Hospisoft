import { cnx } from "./bdatos.js";

const db = cnx.promise();

export const medicoModel = {
  findall: async () => {
    const sql = "select * from tblmedico";
    const [rows] = await db.query(sql);
    return rows;
  },
};
