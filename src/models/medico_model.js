import cnx from "./bdatos.js";

const db = cnx.promise();

export const medico = {
  findall: async () => {
    const sql = "select * from tblmedicos";
    const [rows] = await db.query(sql);
    return rows;
  },
};
