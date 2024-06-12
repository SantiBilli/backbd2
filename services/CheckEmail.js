import redis_client from "../services/database.js"

export const emailExistSVC = async (bodyParams) => {

    const emailExist = await redis_client.v4.hExists(bodyParams.email,"email")

    return emailExist
}