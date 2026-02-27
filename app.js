import express from "express";
import cors from "cors";
import medicoRutas from "./src/routes/medico.routes.js";
import pacienteRutas from "./src/routes/paciente.routes.js";
import medicamentoRutas from "./src/routes/medicamento.routes.js";
import usuarioRutas from "./src/routes/usuario.routes.js";
import rolRutas from "./src/routes/rol.routes.js";

//instanciamos la libreria en un objeto - app
const app = express();
app.use(express.json()); // para que el servidor entienda json en el body
app.use(cors());

//rutas
app.use("/api", medicoRutas);
app.use("/api", medicamentoRutas);
app.use("/api", pacienteRutas);
app.use("/api", usuarioRutas);
app.use("/api", rolRutas);
export default app;
