//? vamos a crear los endpoints para los medicamentos
//* importamos las rutas para gestionar los medicamentos

import { Router } from 'express';

//*importamos la logica del controlador de medicamentos

import * as medicamentoController from '../controllers/medicamento.controller.js';

//* instanciamos las rutas del router de express para poder crear las rutas de medicamentos

const router = Router();

//* rutas del modulo rutas para listar todo
router.get("/medicamento/listarmedicamentos", medicamentoController.getMedicamentos);

//* ruta para crear un nuevo medicamento
router.post("/medicamento/crearmedicamento", medicamentoController.createMedicamento);  

//* ruta para obtener un medicamento por su id
router.get("/medicamento/obtenermedicamento/:id", medicamentoController.getMedicamentoById);

//* ruta para actualizar un medicamento por su id
router.put("/medicamento/actualizarmedicamento/:id", medicamentoController.updateMedicamento);

//* ruta para eliminar un medicamento por su id
router.delete("/medicamento/eliminarmedicamento/:id", medicamentoController.deleteMedicamento);

export default router;