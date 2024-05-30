import { Router } from "express"
import { validateToken } from "../middlewares/Authenticator.js"
import { crearPedido } from "../controller/crearPedido.js"

const crearPedidoRouter = Router()

crearPedidoRouter.post("/crear-pedido", validateToken, crearPedido)

export default crearPedidoRouter