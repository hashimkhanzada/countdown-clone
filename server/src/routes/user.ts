import express from "express";
import expressAsyncHandler from "express-async-handler";

import { signin, signup } from "../controllers/users";

const router = express.Router();

router.post("/signin", expressAsyncHandler(signin));
router.post("/signup", expressAsyncHandler(signup));

export default router;
