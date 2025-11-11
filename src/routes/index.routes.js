import { Router } from "express";
import productosRoutes from './productos.routes.js'
import usuariosRoutes from './usuarios.routes.js'
const router = Router()

// http://localhost:3000/api/productos/

router.use('/productos', productosRoutes)
router.use('/usuarios', usuariosRoutes)

export default router