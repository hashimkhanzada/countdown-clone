import express from "express";
import expressAsyncHandler from "express-async-handler";

import { newOrder, getOrders } from "../controllers/orders";
import auth from "../middleware/auth";

const router = express.Router();

router.post("/", expressAsyncHandler(newOrder));
router.get("/", expressAsyncHandler(getOrders));

export default router;
