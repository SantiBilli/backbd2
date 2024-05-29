import { Router } from "express"
import { validateToken } from "../middlewares/Authenticator.js"
import { agregarProductoCarrito, borrarProducto, cambiarCantidad, getCarrito } from "../controller/Carrito.js"

const carritoRouter = Router()

carritoRouter.post('/get-carrito', validateToken, getCarrito) 

carritoRouter.post('/agregar-producto-carrito', validateToken, agregarProductoCarrito)

carritoRouter.post('/cambiar-cantidad', validateToken, cambiarCantidad)

carritoRouter.post('/borrar-producto', validateToken, borrarProducto)

export default carritoRouter