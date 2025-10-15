import Producto from "../models/producto.js"

export const prueba = (req, res)=>{  
    console.log('desde el controlador de prueba')
    res.send('prueba desde el controlador')
}

export const crearProducto = async (req, res)=>{
    try {
        //1- Verificar que llegan los datos validados
        //2- Pedir al modelo producto el objeto en la base de datos
        console.log(req)
        const productoNuevo= new Producto(req.body)
        await productoNuevo.save()  //guarda en la base de datos
        res.status(201).json({mensaje:"el producto fue creado exitosamente"})
        
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje:"Ocurrio un error al crear el producto", error: error.message,})
        
    }
 
};

export const listarProductos = async (req, res)=>{
    try {
        //1- buscar la collection de productos
        const productos = await Producto.find()
        
        //2- enviar la respuesta al front
        res.status(200).json(productos)
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje:"Ocurrio un error al crear el producto", error: error.message,})
        
    }
 
};

export const obtenerProducto = async (req, res)=>{
    try {
        console.log(req.params.id)
        const productoBuscado = await Producto.findById(req.params.id)
        if (!productoBuscado) {
            return res.status(404).json({mensaje:"no se encontro el producto"})
        }
        res.status(200).json(productoBuscado)
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje:"Ocurrio un error al crear el producto", error: error.message,})
        
    }
 
};