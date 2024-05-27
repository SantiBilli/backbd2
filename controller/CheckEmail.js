// import { checkEmailExists } from "../services/CheckEmail.js"

import redis_client from "../services/database.js"

export const checkEmail = async (req, res) => {

    const bodyParams = req.body

    const emailExist = await redis_client.v4.hExists(bodyParams.email,"email")

    if (emailExist == false) return res.status(204).send("Mail Found")

    return res.status(200).send()
}