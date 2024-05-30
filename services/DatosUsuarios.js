import redis_client from "./database.js"

export const nombreUsuarioSVC = async (bodyParams) => {
    const nombre = await redis_client.v4.HGET(bodyParams.email, 'nombre')
    return nombre
}

export const apellidoUsuarioSVC = async (bodyParams) => {
    const apellido = await redis_client.v4.HGET(bodyParams.email, 'apellido')
    return apellido
}