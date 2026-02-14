//? vamos a crear los endpoints para los medicamentos
//* importamos las rutas para gestionar los medicamentos 
import { Router } from 'express';

//*importamos la logica del controlador de medicamentos

import * as medicamentoController from '../controllers/medicamento.controller.js';

//* instanciamos las rutas del router de express para poder crear las rutas de medicamentos

const router = Router();

//* rutas del modulo rutas para listar todo
router.get("/")