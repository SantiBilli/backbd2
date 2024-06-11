import { Router } from "express"
import { validateToken } from "../middlewares/Authenticator.js"
import { crearFactura } from "../controller/CrearFactura.js"

const crearFacturaRouter = Router()

crearFacturaRouter.post("/factura", validateToken, crearFactura)

export default crearFacturaRouter