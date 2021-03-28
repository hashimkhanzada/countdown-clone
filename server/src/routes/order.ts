import express from "express";
import expressAsyncHandler from "express-async-handler";

import { newOrder } from "../controllers/orders";
import auth from "../middleware/auth";

const router = express.Router();

router.post("/", expressAsyncHandler(newOrder));

export default router;
