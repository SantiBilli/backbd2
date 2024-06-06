import { Router } from "express"
import { checkEmail } from "../controller/CheckEmail.js"

const checkEmailRouter = Router()

checkEmailRouter.post("/check-email", checkEmail)

// checkEmailRouter.get("/check-email/:email", checkEmail)


export default checkEmailRouter