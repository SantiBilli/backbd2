import { Router } from "express"
import { validateToken } from "../middlewares/Authenticator.js"
import { obtenerFacturas } from "../controller/ObtenerFacturas.js"

const obtenerFacturasRouter = Router()

obtenerFacturasRouter.post('/obtener-facturas', validateToken, obtenerFacturas)

export default obtenerFacturasRouter