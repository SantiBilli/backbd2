import { Router } from "express"
import { validateToken } from "../middlewares/Authenticator.js"
import { obtenerDatos } from "../controller/DatosUsuarios.js"

const datosUsuarioRouter = Router()

datosUsuarioRouter.post("/datos-usuarios", validateToken, obtenerDatos)

export default datosUsuarioRouter