import { Router } from "express"
import { addUrl } from "../../controllers/v1/url.js"

const urlRouter = Router()

urlRouter.post("/add", addUrl)

export default urlRouter
