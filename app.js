import express from "express";
import cors from "cors";

// ✅ Nombres correctos apuntando a los archivos correctos
import usuariosRutas from "./src/routes/usuarios.routes.js";
import medicoRutas from "./src/routes/medico.routes.js";
import medicamentoRutas from "./src/routes/medicamento.routes.js";
import pacienteRutas from "./src/routes/paciente.routes.js";

const app = express();
app.use(express.json());
app.use(cors());

//  Las 4 rutas registradas correctamente
app.use("/api", usuariosRutas);
app.use("/api", medicoRutas);
app.use("/api", medicamentoRutas);
app.use("/api", pacienteRutas);

export default app;