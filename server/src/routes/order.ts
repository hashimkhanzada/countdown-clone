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

router.post("/", expressAsyncHandler(newOrder));
router.get("/", expressAsyncHandler(getOrders));
router.get("/history/:userId", expressAsyncHandler(getOrderHistory));
router.get("/:id", expressAsyncHandler(getOrderById));

export default router;
