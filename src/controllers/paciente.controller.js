import { pacienteModel } from "../models/paciente_model.js";

export const getPacientes = async (req, res) => {
  try {
    const results = await pacienteModel.findall();
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: "Error al listar los pacientes" });
  }
};

export const deletePaciente = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await pacienteModel.delete(id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el paciente" });
  }
};

export const createPaciente = async (req, res) => {
  try {
    const data = {
      nombrePaciente: req.body.nombrePaciente,
      documentoPaciente: req.body.documentoPaciente,
      celularPaciente: req.body.celularPaciente,
      emailPaciente: req.body.emailPaciente,
      fechaNacimientoPaciente: req.body.fechaNacimientoPaciente,
    };
    const results = await pacienteModel.create(data);
    res.json({
      mensaje: "paciente creado correctamente",
      results,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el paciente" });
  }
};

export const updatePaciente = async (req, res) => {
  try {
    const { id } = req.params;
    const data = {
      nombrePaciente: req.body.nombrePaciente,
      documentoPaciente: req.body.documentoPaciente,
      celularPaciente: req.body.celularPaciente,
      emailPaciente: req.body.emailPaciente,
      fechaNacimientoPaciente: req.body.fechaNacimientoPaciente,
    };
    const results = await pacienteModel.update(id, data);
    res.json({
      mensaje: "paciente actulizado correctamente",
      results,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el paciente" });
  }
};
