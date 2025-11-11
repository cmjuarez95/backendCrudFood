import { Router } from "express"
import { borrarProductoPorId, editarProductoPorId, listarProductos, obtenerProducto, prueba } from "../controllers/productos.controllers.js"
import { crearProducto } from "../controllers/productos.controllers.js"
import validacionProducto from "../middleware/validacionProducto.js"
import verificarJWT from "../middleware/verificarToken.js"
import validacionIdProducto from "../middleware/validacionIdProducto.js"
/*
GET
POST
PATH O PUT
DELETE
*/

const router = Router()

router.route('/test').get(prueba)
router.route('/').post([verificarJWT, validacionProducto], crearProducto).get(listarProductos);
router.route('/:id').get(validacionIdProducto, obtenerProducto).delete([verificarJWT, validacionIdProducto], borrarProductoPorId).put([verificarJWT, validacionIdProducto, validacionProducto],editarProductoPorId)

export default router