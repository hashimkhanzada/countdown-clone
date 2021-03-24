import { Request, Response } from "express";
import Product from "../models/product";
import data from "../seedData";

interface ProductInfo {
  _id?: string;
  subCategory?: string;
  claims?: string;
  decimalPrice?: string;
  image?: string;
  ingredients?: string;
  isOnSale?: boolean;
  madeIn?: string;
  mainCategory?: string;
  name?: string;
  originalPrice?: string;
  pricePerSpecificUnit?: string;
  saleType?: [string];
  specificUnit?: string;
  totalPrice?: number;
  weight?: number;
  weightUnit?: string;
}

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find({});
  res.send(products);
};

export const getProductById = async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
};

export const getProductByMainCategory = async (req: Request, res: Response) => {
  const category = req.params.mainCategory.toLowerCase();
  const products = await Product.find({
    mainCategory: category,
  });

  if (products) {
    const subCategories = [];

    products.forEach((element: ProductInfo) => {
      if (
        !subCategories.some(
          (item) => item.subCategoryName == element.subCategory
        )
      ) {
        subCategories.push({
          subCategoryName: element.subCategory,
          numberOfItems: 1,
        });
      } else {
        subCategories.forEach((sub) => {
          if (sub.subCategoryName === element.subCategory) {
            sub.numberOfItems = sub.numberOfItems + 1;
          }
        });
      }
    });

    res.send({ productData: products, subCategoryData: subCategories });
  } else {
    res.status(404).send({ message: "No Products for this category" });
  }
};

export const seedProducts = async (req: Request, res: Response) => {
  // await Product.remove({});
  // const createdProducts = await Product.insertMany(data);
  res.send("asd");
};
