import express from "express";
import expressAsyncHandler from "express-async-handler";

import {
  getProducts,
  getProductById,
  getProductByMainCategory,
  seedProducts,
  getSubCategoryData,
  getProductsBySearch,
  getMainCategoryData,
} from "../controllers/products";

const router = express.Router();

router.get("/", expressAsyncHandler(getProducts));

router.get("/seed", expressAsyncHandler(seedProducts));

router.get("/search", expressAsyncHandler(getProductsBySearch));
router.get("/search/a", expressAsyncHandler(getMainCategoryData));

router.get(
  "/browse/:mainCategory/data",
  expressAsyncHandler(getProductByMainCategory)
);

router.get(
  "/browse/:mainCategory/subcategory",
  expressAsyncHandler(getSubCategoryData)
);

router.get("/browse/:id", expressAsyncHandler(getProductById));

export default router;
