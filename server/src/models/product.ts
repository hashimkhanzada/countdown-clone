import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    image: { type: String, required: true },
    weight: { type: Number, required: true },
    pricePer100g: { type: Number, required: true },
    totalPrice: { type: Number, required: true },

    description: { type: String },
    ingredients: [String],
    nutritionalInfo: { type: String },
    claims: { type: String },
    allergenWarnings: { type: String },
    endorsements: { type: String },

    category: { type: String, required: true },
    countInStock: { type: Number },
    isOnSale: { type: Boolean, default: false },
    saleType: { type: String },

    originalPrice: { type: Number, required: true },
    salePrice: { type: Number },
    saveAmount: { type: Number },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);

export default Product;
