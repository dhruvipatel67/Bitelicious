import { Router } from "express";

import { submitFeedback } from "../controller/feedback.controller.js";
import { submitDineIn } from "../controller/DineIn.controller.js";
import {registerUser,login} from "../controller/userRL.controller.js"

const router = Router();

router.route("/feedback").post(submitFeedback)
router.route("/DineIn").post(submitDineIn)
router.route('/register').post(registerUser)
router.route('/login').post(login)

export default router;