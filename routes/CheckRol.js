import { Router } from "express"
import { checkRol } from "../controller/CheckRol.js"
import { validateToken } from "../middlewares/Authenticator.js"

const checkRolRouter = Router()

checkRolRouter.post("/check-rol", validateToken, checkRol)

export default checkRolRouter