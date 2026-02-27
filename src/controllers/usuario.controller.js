import { usuarioModel } from "../models/usuario_model.js";

export const getUsuarios = async (req, res) => {
  try {
    const results = await usuarioModel.findall();
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: "Error al listar los Usuarios" });
  }
};

export const getUsuarioById = async (req, res) => {
  try {
    const results = await usuarioModel.findbyid();
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el usuario" });
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await usuarioModel.delete(id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el Usuario" });
  }
};

export const createUsuario = async (req, res) => {
  try {
    const data = {
      nombreUsuario: req.body.nombreUsuario,
      correoUsuario: req.body.correoUsuario,
      passwordUsuario: req.body.passwordUsuario,
      Rol_idRol: req.body.Rol_idRol,
    };
    const results = await usuarioModel.create(data);
    res.json({
      mensaje: "Usuario creado correctamente",
      results,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el Usuario" });
  }
};

export const updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const data = {
      nombreUsuario: req.body.nombreUsuario,
      correoUsuario: req.body.correoUsuario,
      passwordUsuario: req.body.passwordUsuario,
      Rol_idRol: req.body.Rol_idRol,
    };
    const results = await usuarioModel.update(id, data);
    res.json({
      mensaje: "Usuario actulizado correctamente",
      results,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el Usuario" });
  }
};
