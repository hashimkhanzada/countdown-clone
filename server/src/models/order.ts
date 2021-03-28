import mongoose, { Document } from "mongoose";

interface IOrder extends Document {
  orderItems: [
    {
      quantity: number;
      productSubTotal: number;
      productImage: string;
      product: string;
    }
  ];
  user: string;
  totalPrice: number;
  address: string;
}

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        quantity: { type: Number, required: true },
        productSubTotal: { type: Number, required: true },
        productImage: { type: String },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
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
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model<IOrder>("Order", orderSchema);

export default Order;
