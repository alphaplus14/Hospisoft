import { Router } from "express";

import * as usuarioCtr from "../controllers/usuario.controller.js";

const router = Router();

router.get("/usuario/listarusuarios", usuarioCtr.getUsuarios);
router.get("/usuario/obtenerusuario/:id", usuarioCtr.getUsuarios);
router.delete("/usuario/eliminarusuario/:id", usuarioCtr.deleteUsuario);
router.post("/usuario/crearusuario", usuarioCtr.createUsuario);
router.put("/usuario/actualizarusuario/:id", usuarioCtr.updateUsuario);

export default router;
