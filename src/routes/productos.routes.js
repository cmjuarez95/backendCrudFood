import { Router } from "express"
import { prueba } from "../controllers/productos.controllers.js"
import { crearProducto } from "../controllers/productos.controllers.js"
/*
GET
POST
PATH O PUT
DELETE
*/

const router = Router()

router.route('/test').get(prueba)
router.route('/').post(crearProducto)

export default router