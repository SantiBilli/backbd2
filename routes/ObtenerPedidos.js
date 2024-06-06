import { Router } from "express"
import { validateToken } from "../middlewares/Authenticator.js"
import { obtenerPedidos } from "../controller/ObtenerPedidos.js"

const obtenerPedidosRouter = Router()

obtenerPedidosRouter.post('/obtener-pedidos', validateToken, obtenerPedidos)

export default obtenerPedidosRouter