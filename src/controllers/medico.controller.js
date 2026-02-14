import { medicoModel } from "../models/medico_model.js";

export const getMedicos = async (req, res) => {
  try {
    const results = await medicoModel.findall();
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: "Error al listar los medicos" });
  }
};

export const deleteMedico = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await medicoModel.delete(id);

    res.json({
      mensaje: "Medico eliminado correctamente",
      result,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};



