import { Router } from "express"
import { validateToken } from "../middlewares/Authenticator.js"
import { getCarrito } from "../controller/Carrito.js"

const carritoRouter = Router()

carritoRouter.get('/get-carrito', validateToken, getCarrito) 

// carritoRouter.post('/get-products', validateToken, postsList)

export default carritoRouter