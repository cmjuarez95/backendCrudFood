import { Router } from "express"
import { borrarProductoPorId, listarProductos, obtenerProducto, prueba } from "../controllers/productos.controllers.js"
import { crearProducto } from "../controllers/productos.controllers.js"
/*
GET
POST
PATH O PUT
DELETE
*/

const router = Router()

router.route('/test').get(prueba)
router.route('/').post(crearProducto).get(listarProductos)
router.route('/:id').get(obtenerProducto).delete(borrarProductoPorId)

export default router