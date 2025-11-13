import generarJWT from "../middleware/generarJWT.js"
import Usuario from "../models/usuario.js"
import bcrypt from 'bcryptjs'

export const crearUsuario= async (req,res)=>{
    try {
        const saltos = bcrypt.genSaltSync(10)
        const passwordEncriptado = bcrypt.hashSync(req.body.password, saltos)
        req.body.password= passwordEncriptado
        const usuarioNuevo = new Usuario(req.body)

        await usuarioNuevo.save()
        res.status(201).json({mensaje:"usuario creado correctamente"})
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje:"ocurrio un error, no se pudo crear el usuario"})
    }
}

export const listarUsuarios = async (req, res)=>{
    try {
        //1- buscar la collection de productos
        const usuarios = await Usuario.find()
        
        //2- enviar la respuesta al front
        res.status(200).json(usuarios)
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje:"Ocurrio un error al mostrar los usuarios", error: error.message,})
        
    }
 
};

export const login = async (req, res)=>{
    try {
        const {email, password}= req.body
        //verificar email

        const usuarioBuscado = await Usuario.findOne({email})

        if (!usuarioBuscado) {
            return res.status(404).json({mensaje: "el usuario no existe"
            })
        }
        //chequear el password

        const passwordValido = bcrypt.compareSync(password, usuarioBuscado.password)
        if (!passwordValido) {
            return res.status(401).json({mensaje: "Contraseña incorrecta"})
        }
        //generar token
        const token = generarJWT(usuarioBuscado.nombreUsuario, email)

        res.status(200).json({mensaje:"Usuario logueado correctamente", usuario: usuarioBuscado.nombreUsuario, token
            
         })
    } catch (error) {
    console.error("🔴 ERROR EN LOGIN 🔴");
    console.error("Mensaje:", error.message);
    console.error("Stack:", error.stack);
    res.status(500).json({
      mensaje: "Error en login",
      error: error.message,
      stack: error.stack,
        });
    }
}
