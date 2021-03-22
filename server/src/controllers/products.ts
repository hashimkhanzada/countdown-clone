import { Request, Response } from "express";
import Product from "../models/product";
import data from "../seedData";

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

export const seedProducts = async (req: Request, res: Response) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data);
  res.send({ createdProducts });
};
