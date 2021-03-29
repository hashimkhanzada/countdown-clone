import { Request, Response } from "express";

import Order from "../models/order";

export const newOrder = async (req: Request, res: Response) => {
  if (req.body.orderItems.length === 0) {
    res.status(400).send({ message: "Cart is empty" });
  } else {
    const order = new Order({
      orderItems: req.body.orderItems,
      user: req.body.user._id,
      totalPrice: req.body.totalPrice,
      address: req.body.address,
      deliveryDate: req.body.deliveryDate,
    });

    const createdOrder = await order.save();
    res.status(201).send({ message: "New Order Created", order: createdOrder });
  }
};

export const getOrders = async (req: Request, res: Response) => {
  const orders = await Order.find({});
  res.send(orders);
};
