import redis_client from "../services/database.js"

export const obtenerDatos = async (req, res) => {
    const bodyParams = req.body

    const nombre = await redis_client.v4.HGET(bodyParams.email, 'nombre')
    const apellido = await redis_client.v4.HGET(bodyParams.email, 'apellido')

    return res.json({
        nombre: nombre,
        apellido: apellido
    })
}