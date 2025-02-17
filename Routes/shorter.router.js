import { Router } from "express";
import * as shorterController from "../controllers/shorter.contorller.js"
import expressAsyncHandler from "express-async-handler";

const router =Router()

router.post("/",expressAsyncHandler(shorterController.shorterURL))

export default router