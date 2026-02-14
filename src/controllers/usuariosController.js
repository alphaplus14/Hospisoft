import {usuariosModel} from "../models/usuariosModel.js";

export const getUsuarios = async (req, res) => {
  try {
    //buscar todos los usuarios
    const usuarios = await usuariosModel.findallUsuario(); 
    res.json( usuarios);


    }   catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener los usuarios" });
    } 
    
    } 
//buscar usuario por id
 export const findByIdUsuario = async (request, response) => {
 //codigo protegido por try catch para manejar errores
 try {


const result = await usuariosModel.findByIdUsuario(request.params.id);  
response.json(result); 



 }
 catch (error) {
response.status(500).json({message: `error al buscar su usuario ${error.message}`});



 }
    }


//funcion para crear un nuevo usuario
    export const createUsuario = async (request, response) => {
  const datos = {
    nombreUsuario: request.body.nombreUsuario,
    correoUsuario: request.body.correoUsuario,
    passwordUsuario: request.body.passwordUsuario,
    tblRol_idtblRol: request.body.tblRol_idtblRol
  };
  
  try {
    const resultado = await usuariosModel.createUsuario(datos);
    response.json(resultado);
  } catch (error) {
    response.status(500).json({ 
      mensaje: `Error al crear el usuario: ${error.message}` 
    });
  }
};

//funcion para actualizar un usuario existente
export const updateUsuario = async (request, response) => {
  const id = request.params.id;

  try {
    const resultado = await usuariosModel.updateUsuario(id, request.body); //este metdo solo actualiza los campos enviados
    response.json(resultado);
  } catch (error) {
    response.status(500).json({ 
      mensaje: `Error al actualizar el usuario: ${error.message}` 
    });
  }
};



     