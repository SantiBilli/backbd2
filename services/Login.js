import redis_client from "./database.js"

export const userContraSVC = async (bodyParams) => {
    const userContra = await redis_client.v4.HGET(bodyParams.email,'contra')
    return userContra
}

export const userIdSVC = async (bodyParams) => {
    const userId = await redis_client.v4.HGET(bodyParams.email, 'id')
    return userId
}

export const rolSVC = async (bodyParams) => {
    const rol = await redis_client.v4.HGET(bodyParams.email, 'rol')
    return rol
}