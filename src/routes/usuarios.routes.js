// Las rutas del modelo usuario

import { Router } from "express";

// Importamos la lógica del controlador para construir
// cada interacción de la ruta: get, post, put, delete
import * as usuarioCtr from "../controllers/usuariosController.js";

// Instanciamos el método router de express para poder crear las rutas
const router = Router();

// Ponemos la ruta del módulo
// Ruta para listar todos los usuarios
router.get("/usuarios/listartodos", usuarioCtr.getUsuarios);
router.get("/usuarios/buscarporid/:id", usuarioCtr.findByIdUsuario);
router.post("/usuarios/crear", usuarioCtr.createUsuario);
router.put("/usuarios/actualizar/:id", usuarioCtr.updateUsuario);
router.delete("/usuarios/eliminar/:id", usuarioCtr.deleteUsuario);

export default router;