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

export const getProductsBySearch = async (req: Request, res: Response) => {
  const searchTerm = req.query.searchTerm;

  const productCount = await Product.find({
    name: { $regex: searchTerm, $options: "i" },
  }).countDocuments();

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
    results.paginatedProducts = await Product.find({
      name: { $regex: searchTerm, $options: "i" },
    })
      .limit(limit)
      .skip(startIndex);
  } catch (err) {
    console.log(err);
  }

  res.send({ results: results, totalProducts: productCount });
};

export const getProductByMainCategory = async (req: Request, res: Response) => {
  const category = req.params.mainCategory.toLowerCase();
  const productCount = await Product.find({
    mainCategory: category,
  }).countDocuments();

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
    results.paginatedProducts = await Product.find({
      mainCategory: category,
    })
      .limit(limit)
      .skip(startIndex);
  } catch (err) {
    console.log(err);
  }

  res.send({ results: results, totalProducts: productCount });
};

export const getMainCategoryData = async (req: Request, res: Response) => {
  const searchTerm = req.query.searchTerm;

  const products = await Product.find({
    name: { $regex: searchTerm, $options: "i" },
  });

  const categories = [];

  products.forEach((element: ProductInfo) => {
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

  products.forEach((element: ProductInfo) => {
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
  // await Product.remove({});
  // const createdProducts = await Product.insertMany(data);
  res.send("asd");
};
