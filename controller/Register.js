import { registerUserSVC } from "../services/Register.js";

export const registerUser = async (req, res) => {
    const bodyParams = req.body

    await registerUserSVC(bodyParams)
    
    return res.send()

}