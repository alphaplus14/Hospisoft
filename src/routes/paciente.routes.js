import { Router } from "express";

import * as pacienteCtr from "../controllers/paciente.controller.js";

const router = Router();

router.get("/paciente/listarpacientes", pacienteCtr.getPacientes);
router.delete("/paciente/eliminarpaciente/:id", pacienteCtr.deletePaciente);
router.post("/paciente/crearpaciente", pacienteCtr.createPaciente);
router.put("/paciente/actualizarpaciente/:id", pacienteCtr.updatePaciente);

export default router;
