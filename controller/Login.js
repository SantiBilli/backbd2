import { generateToken } from "../middlewares/Authenticator.js";
import { rolSVC, userContraSVC, userIdSVC } from "../services/Login.js";

export const loginUser = async (req, res) => {
    const bodyParams = req.body

    const userContra = await userContraSVC(bodyParams)

    if (userContra == null) return res.status(401).send("Datos Incorrectos") //No existe mail
    if (userContra !=  bodyParams.contra) return res.status(401).send("Datos Incorrectos") //Contrasaena incorrecta
    
    const userId = await userIdSVC(bodyParams)
    const rol = await rolSVC(bodyParams)

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