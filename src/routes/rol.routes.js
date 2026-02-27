import { Router } from "express";

import rolCtr from "../controllers/rol.controller.js";

const router = Router();

router.get("/rol/listarrols", rolCtr.getRoles);
router.get("/rol/obtenerrol/:id", rolCtr.getRolById);
router.delete("/rol/eliminarrol/:id", rolCtr.deleteRol);
router.post("/rol/crearrol", rolCtr.createRol);
router.put("/rol/actualizarrol/:id", rolCtr.updateRol);

export default router;