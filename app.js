import express from "express";
import cors from "cors";
<<<<<<< HEAD
=======
import medicoRutas from "./src/routes/medico.routes.js";
import pacienteRutas from "./src/routes/paciente.routes.js";
import medicamentoRutas from "./src/routes/medicamento.routes.js";
import usuarioRutas from "./src/routes/usuario.routes.js";
>>>>>>> 982f85eef101aa09860bb265e61a067f735e271d

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
<<<<<<< HEAD

export default app;
=======
app.use("/api", usuarioRutas);
export default app;
>>>>>>> 982f85eef101aa09860bb265e61a067f735e271d
