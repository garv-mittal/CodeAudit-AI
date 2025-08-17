import Router from "express"
import { getReview } from "../controller/ai.controller.js";

const router = Router();


router.post("/get-review", getReview)



export default router;