import { Router } from "express"
import { validateToken } from "../middlewares/Authenticator.js"
import { agregarProductoCarrito, getCarrito } from "../controller/Carrito.js"

const carritoRouter = Router()

carritoRouter.post('/get-carrito', validateToken, getCarrito) 

carritoRouter.post('/agregar-producto-carrito', validateToken, agregarProductoCarrito)

export default carritoRouter