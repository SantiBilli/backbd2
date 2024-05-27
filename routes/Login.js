import { Router } from "express"
import { loginUser, validateLogin } from "../controller/Login.js"
import { validateToken } from "../middlewares/Authenticator.js"

const loginRouter = Router()

loginRouter.post('/login', loginUser)
loginRouter.get("/login/verify-token", validateToken, validateLogin)

export default loginRouter