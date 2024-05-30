import { emailExistSVC } from "../services/CheckEmail.js"

export const checkEmail = async (req, res) => {

    const bodyParams = req.body

    const emailExist = await emailExistSVC(bodyParams)

    if (emailExist == false) return res.status(204).send("Mail Found")

    return res.status(200).send()
}