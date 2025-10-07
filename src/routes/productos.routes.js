import { Router } from "express"
/*
GET
POST
PATH O PUT
DELETE
*/

const router = Router()

router.route('/').get((req, res) => {
    console.log('desde el controlador de prueba')
    res.send('prueba desde el controlador')
})

export default router