import { rolModel } from "../models/rol_model.js";

export const getRoles = async (req, res) => {
  try {
    const results = await rolModel.findall();
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: "Error al listar los roles" });
  }
};

export const getRolById = async (req, res) => {
  try {
    const results = await rolModel.findbyid(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el rol" });
  }
};

export const deleteRol = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await rolModel.delete(id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el rol" });
  }
};

export const createRol = async (req, res) => {
  try {
    const data = {
      nombreRol: req.body.nombreRol,
    };
    const results = await rolModel.create(data);
    res.json({
      mensaje: "Rol creado correctamente",
      results,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el Rol" });
  }
};

export const updateRol = async (req, res) => {
  try {
    const { id } = req.params;
    const data = {
      nombreRol: req.body.nombreRol,
    };
    const results = await rolModel.update(id, data);
    res.json({
      mensaje: "Rol actulizado correctamente",
      results,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el Rol" });
  }
};
