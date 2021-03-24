import express from "express";
import expressAsyncHandler from "express-async-handler";

import {
  getProducts,
  getProductById,
  getProductByMainCategory,
  seedProducts,
} from "../controllers/products";

const router = express.Router();

router.get("/", expressAsyncHandler(getProducts));
router.get("/seed", expressAsyncHandler(seedProducts));
router.get(
  "/browse/:mainCategory",
  expressAsyncHandler(getProductByMainCategory)
);
router.get("/:id", expressAsyncHandler(getProductById));

export default router;
