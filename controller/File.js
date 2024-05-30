import { postListSVC, uploadFileSVC } from "../services/File.js";

export const fileUpload = async (req, res) => {
    const bodyParams = req.body
    const imagen = req.file

    if (req.file === undefined || bodyParams.nameProd === '' || bodyParams.description === '' || bodyParams.price === '') return res.status(204).send("Error.") 


    await uploadFileSVC(bodyParams, imagen)

    return res.send()
}

export const postsList = async (req, res) => {
    
    const postList = await postListSVC()
    return res.json(postList);
}