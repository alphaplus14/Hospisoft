// las rutas del modulo mmedico

import { Router } from "express";

//importamos la logica del controlador para construir

//cada interaccion de la ruta: get, post , put , delete

import * as medicoCtr from "../controllers/medico.controller.js";

//instanciamos el metodo router del express para poder crear las rutas

const router = Router();

router.get("/medico/listarmedicos",medicoCtr.getMedicos);

export default router;
