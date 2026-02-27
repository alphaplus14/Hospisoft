import express from "express";
import cors from "cors";
import medicoRutas from "./src/routes/medico.routes.js";
import medicamentoRutas from "./src/routes/medicamento.routes.js";
import usuarioRutas from "./src/routes/usuario.routes.js";
import rolRutas from "./src/routes/rol.routes.js";

const app = express();
app.use(express.json());
app.use(cors());

//  Las 4 rutas registradas correctamente
app.use("/api", usuariosRutas);
app.use("/api", medicoRutas);
app.use("/api", medicamentoRutas);
app.use("/api", pacienteRutas);
app.use("/api", usuarioRutas);
app.use("/api", rolRutas);
export default app;