"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var orderSchema = new mongoose_1.default.Schema({
    orderItems: [
        {
            quantity: { type: Number, required: true },
            productSubTotal: { type: Number, required: true },
            productImage: { type: String },
            productName: { type: String },
            productId: {
                type: mongoose_1.default.Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },
        },
    ],
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    deliveryDate: { type: String },
}, {
    timestamps: true,
});
var Order = mongoose_1.default.model("Order", orderSchema);
exports.default = Order;
