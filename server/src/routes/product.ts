import express from "express";
import expressAsyncHandler from "express-async-handler";

import {
  getProducts,
  getProductById,
  getProductByMainCategory,
  seedProducts,
  getSubCategoryData,
} from "../controllers/products";

const router = express.Router();

router.get("/", expressAsyncHandler(getProducts));
router.get("/seed", expressAsyncHandler(seedProducts));
router.get(
  "/browse/:mainCategory/data",
  expressAsyncHandler(getProductByMainCategory)
);
router.get(
  "/browse/:mainCategory/subcategory",
  expressAsyncHandler(getSubCategoryData)
);
router.get("/:id", expressAsyncHandler(getProductById));

export default router;
