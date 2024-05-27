// import { checkUser } from "../services/Login.js"
import redis_client from "../services/database.js";
import { generateToken } from "../middlewares/Authenticator.js";

export const loginUser = async (req, res) => {
    const bodyParams = req.body

    const userContra = await redis_client.v4.HGET(bodyParams.email,'contra')

    if (userContra == null) return res.status(401).send("Datos Incorrectos") //401 Unauthorized
    if (userContra !=  bodyParams.contra) return res.status(401).send("Datos Incorrectos")
    
    const userId = await redis_client.v4.HGET(bodyParams.email, 'id')
    const rol = await redis_client.v4.HGET(bodyParams.email, 'rol')

    const token = generateToken({userId, rol})

    return res.json({
        token: token,
        userData: {
            userId: userId,
            email: bodyParams.email,
            rol: rol
        }
    })
}

export const validateLogin = async (req, res) => {
    res.send("Token Validado")
}