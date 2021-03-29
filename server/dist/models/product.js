"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var productSchema = new mongoose_1.default.Schema({
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
}, {
    timestamps: true,
});
var Product = mongoose_1.default.model("Product", productSchema);
exports.default = Product;
