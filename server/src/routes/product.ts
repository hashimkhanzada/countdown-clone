import express from "express";
import expressAsyncHandler from "express-async-handler";

import {
  getProducts,
  getProductById,
  getProductList,
  seedProducts,
  getSubCategoryData,
  getMainCategoryData,
} from "../controllers/products";

const router = express.Router();

router.get("/", expressAsyncHandler(getProducts));

router.get("/seed", expressAsyncHandler(seedProducts));

router.get("/search/category", expressAsyncHandler(getMainCategoryData));

router.get("/browse/data", expressAsyncHandler(getProductList));

router.get(
  "/browse/:mainCategory/subcategory",
  expressAsyncHandler(getSubCategoryData)
);

router.get("/browse/:id", expressAsyncHandler(getProductById));

export default router;
