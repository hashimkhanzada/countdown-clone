import mongoose, { Document } from "mongoose";

interface IProduct extends Document {
  name?: any;
  image?: string;
  weightUnit?: string;
  weight?: number;
  specificUnit?: string;
  pricePerSpecificUnit?: string;
  totalPrice?: number;
  originalPrice?: string;
  decimalPrice?: string;
  salePrice?: number;
  saveAmount?: number;
  madeIn?: string;
  ingredients?: string;
  description?: string;
  nutritionalInfo?: string;
  claims?: string;
  allergenWarnings?: string;
  endorsements?: string;
  isOnSale?: boolean;
  countInStock?: number;
  subCategory?: string;
  mainCategory?: string;
  saleType?: [string];
}

const productSchema = new mongoose.Schema(
  {
    description: { type: String },
    name: { type: String },
    image: { type: String },

    weightUnit: { type: String, default: "g" },
    weight: { type: Number },
    specificUnit: { type: String },
    pricePerSpecificUnit: { type: String },

    totalPrice: { type: Number },

    originalPrice: { type: String },
    decimalPrice: { type: String },
    salePrice: { type: Number },
    saveAmount: { type: Number },

    madeIn: { type: String },
    ingredients: { type: String },
    nutritionalInfo: { type: String },
    claims: { type: String },
    allergenWarnings: { type: String },
    endorsements: { type: String },

    mainCategory: { type: String },
    subCategory: { type: String },
    countInStock: { type: Number },
    isOnSale: { type: Boolean, default: false },
    saleType: [String],
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model<IProduct>("Product", productSchema);

export default Product;
