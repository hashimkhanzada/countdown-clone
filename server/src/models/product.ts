import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    image: { type: String, required: true },

    weightUnit: { type: String, default: "g" },
    weight: { type: Number, required: true },
    specificUnit: { type: String, required: true },
    pricePerSpecificUnit: { type: String, required: true },

    totalPrice: { type: Number },

    originalPrice: { type: String },
    decimalPrice: { type: String },
    salePrice: { type: Number },
    saveAmount: { type: Number },

    madeIn: { type: String },
    description: { type: String },
    ingredients: { type: String },
    nutritionalInfo: { type: String },
    claims: { type: String },
    allergenWarnings: { type: String },
    endorsements: { type: String },

    categoryType: { type: String, required: true },
    category: { type: String, required: true },
    countInStock: { type: Number },
    isOnSale: { type: Boolean, default: false },
    saleType: [String],
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);

export default Product;
