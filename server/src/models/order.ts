import mongoose, { Document } from "mongoose";

interface IOrder extends Document {
  firstName: string;
}

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        productName: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
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
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model<IOrder>("Order", orderSchema);

export default Order;
