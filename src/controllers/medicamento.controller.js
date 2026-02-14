//? Controlador para los medicamentos

//* primero importo los medicamentos

import { medicamentoModel } from "../models/medicamento_model.js";

//* luego creo la función para listar los medicamentos */

export const getMedicamentos = async(req, res) => {
    try {
        const result = await medicamentoModel.findall();
        res.json({ result });
    }
    catch (error) {
        res.status(500).json({ error: "Error al listar los medicamentos" });
    }
};

//*Buscar medicamento por id */

export const getMedicamentoById = async (req, res) => {
    try {
        const result = await medicamentoModel.findById(req.params.id);
        res.json({ result });

    }
    catch (error) {
        res.status(500).json({
            error: "Error al buscar medicamento"
        });
        
    }
};

//* Insertar un registro de medicamentos a la base de datos
export const createMedicamento = async (req, res) => {
    const data = {
        nombreMedicamento: req.body.nombreMedicamento,
        cantidadMedicamento: req.body.cantidadMedicamento,
        precioMedicamento: req.body.precioMedicamento,
        fechaVencimiento: req.body.fechaVencimiento,
        tblFormulaMedica_idFormula: req.body.tblFormulaMedica_idFormula
    };

    try {
        const results = await medicamentoModel.create(data);
        res.json({ results });
    } catch (error) {
        res.status(500).json({
            error: "Error al crear el medicamento"
        });
        console.log(error);
    }
};


//* luego creo la función para eliminar un medicamento */

export const deleteMedicamento = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await medicamentoModel.delete(id);

        res.json({
            mensaje: "Medicamento eliminado correctamente",
            result,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};


//* funcion para actualizar un medicamento */

export const updateMedicamento = async (req, res) => {
    try {
        const results = await medicamentoModel.update(req.params.id, req.body);
        res.json({ results });
    }
    catch (error) {
        res.status(500).json({
            error: "Error al actualizar el medicamento"
        });
    }
};