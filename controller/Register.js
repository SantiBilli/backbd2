// import { createUser } from "../services/Register.js"
import { v4 } from "uuid"
import redis_client from "../services/database.js"

export const registerUser = async (req, res) => {
    const bodyParams = req.body

    console.log(bodyParams);

    const userId = v4()

    await redis_client.v4.HSET(`${bodyParams.email}`,{
        'id':`${userId}`,
        'email': `${bodyParams.email}`,
        'nombre':`${bodyParams.nombre}`,
        'apellido':`${bodyParams.apellido}`,
        'DNI':`${bodyParams.dni}`,
        'contra':`${bodyParams.contra}`,
        'rol':`default`
    })

    // console.log("Hash Created!");
    
    return res.send()

}