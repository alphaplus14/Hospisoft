import { medicoModel } from "../models/medico_model.js";

export const getMedicos = async (req, res) => {
  try {
    const medicos = await medicoModel.findall();
    res.json({ medicos });
  } catch (error) {
    res.status(500).json({
      error: "Error al listar los medicos",
    });
  }
};
