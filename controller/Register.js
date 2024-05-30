// import { createUser } from "../services/Register.js"
import { v4 } from "uuid"
import redis_client from "../services/database.js"
import { Carrito } from "../services/schemas.js";

export const registerUser = async (req, res) => {
    const bodyParams = req.body

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

    const carritoId = v4()

    const carrito = new Carrito({
        _id: carritoId,
        idUsuario: userId,
        productos: []
    })

    carrito.save()
    
    return res.send()

}