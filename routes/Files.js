import { Router } from "express"
import { fileUpload, postsList } from "../controller/File.js"
import { upload } from "../middlewares/FileUpload.js"
import { validateToken } from "../middlewares/Authenticator.js"

const fileRouter = Router()

fileRouter.post('/upload-product', validateToken, upload.single('imagen'), fileUpload) 

fileRouter.get('/get-products', validateToken, postsList)

export default fileRouter