import express from "express";
import cors from "cors";
import medicoRutas from "./src/routes/medico.routes.js";

//instanciamos la libreria en un objeto - app
const app = express();
app.use(express.json()); // para que el servidor entienda json en el body
app.use(cors());

//ruta principal
app.use("/api", medicoRutas);

export default app;
