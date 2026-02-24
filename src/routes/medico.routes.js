// las rutas del modulo

import { Router } from "express";

//importamos la logica del controlador para construir

//cada interaccion de la ruta: get, post , put , delete

import * as medicoCtr from "../controllers/medico.controller.js";

//instanciamos el metodo router del express para poder crear las rutas

const router = Router();

router.get("/medico/listarmedicos", medicoCtr.getMedicos);
router.delete("/medico/eliminarmedico/:id", medicoCtr.deleteMedico);
router.post("/medico/crearmedico", medicoCtr.createMedico);
router.put("/medico/actualizarmedico/:id", medicoCtr.updateMedico);

export default router;
