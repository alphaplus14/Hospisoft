// las rutas del modulo ciudadano

import { Router } from "express";

//importamos la logica del controlador para construir

//cada interaccion de la ruta: get, post , put , delete

import * as medicoCtr from "../controllers/medico.controller.js";

//instanciamos el metodo router del express para poder crear las rutas

const router = Router();

export default router;
