import { Request, Response } from "express";
import Product from "../models/product";
import data from "../seedData";
import { Product as ProductType } from "../types";

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

export const getProductsBySearch = async (req: Request, res: Response) => {
  const searchTerm = req.query.searchTerm;

  paginate(req, res, { name: { $regex: searchTerm, $options: "i" } });
};

export const getProductByMainCategory = async (req: Request, res: Response) => {
  const category = req.params.mainCategory.toLowerCase();

  paginate(req, res, { mainCategory: category });
};

export const getMainCategoryData = async (req: Request, res: Response) => {
  const searchTerm = req.query.searchTerm;

  const products = await Product.find({
    name: { $regex: searchTerm, $options: "i" },
  });

  const categories = [];

  products.forEach((element: ProductType) => {
    if (!categories.some((item) => item.categoryName == element.mainCategory)) {
      categories.push({
        categoryName: element.mainCategory,
        numberOfItems: 1,
      });
    } else {
      categories.forEach((sub) => {
        if (sub.categoryName === element.mainCategory) {
          sub.numberOfItems = sub.numberOfItems + 1;
        }
      });
    }
  });

  res.send(categories);
};

export const getSubCategoryData = async (req: Request, res: Response) => {
  const category = req.params.mainCategory.toLowerCase();

  const products = await Product.find({
    mainCategory: category,
  });

  const subCategories = [];

  products.forEach((element: ProductType) => {
    if (
      !subCategories.some((item) => item.subCategoryName == element.subCategory)
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

  res.send(subCategories);
};

export const seedProducts = async (req: Request, res: Response) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data);
  res.send({ createdProducts });
};

const paginate = async (req, res, query) => {
  const productCount = await Product.find(query).countDocuments();

  const results = { paginatedProducts: [], next: {}, previous: {} };

  const page = +req.query.page;
  const limit = +req.query.limit;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  if (endIndex < productCount) {
    results.next = {
      page: page + 1,
    };
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
    };
  }

  try {
    results.paginatedProducts = await Product.find(query)
      .limit(limit)
      .skip(startIndex);
  } catch (err) {
    res.status(500).json({ message: err });
  }

  res.send({ results: results, totalProducts: productCount });
};
