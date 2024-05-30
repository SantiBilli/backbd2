import { v4 } from "uuid"
import { Carrito } from "./schemas.js"

export const registerUserSVC = async (bodyParams) => {

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
}
