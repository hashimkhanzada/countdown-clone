import express from "express";
import expressAsyncHandler from "express-async-handler";

import {
  newOrder,
  getOrders,
  getOrderHistory,
  getOrderById,
} from "../controllers/orders";
import auth from "../middleware/auth";

const router = express.Router();

router.post("/", auth, expressAsyncHandler(newOrder));
router.get("/", auth, expressAsyncHandler(getOrders));
router.get("/:id", auth, expressAsyncHandler(getOrderById));
router.get("/history/:userId", auth, expressAsyncHandler(getOrderHistory));

export default router;
