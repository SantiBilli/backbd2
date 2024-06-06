import redis_client from "../services/database.js"

export const emailExistSVC = async (bodyParams) => {

    const emailExist = await redis_client.v4.hExists(bodyParams.email,"email")

    return emailExist
}

// export const emailExistSVC = async (credentials) => {

//     const credentialsJSON = JSON.parse(credentials)

//     const emailExist = await redis_client.v4.hExists(credentialsJSON.email,"email")

//     return emailExist
// }