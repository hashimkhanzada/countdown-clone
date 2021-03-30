import { Request, Response } from "express";

import Order from "../models/order";

export const newOrder = async (req: Request, res: Response) => {
  if (req.body.orderItems.length === 0) {
    res.status(400).send({ message: "Cart is empty" });
  } else {
    const order = new Order({
      orderItems: req.body.orderItems,
      user: req.body.user._id,
      totalPrice: Math.round(req.body.totalPrice),
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

export const getOrderById = async (req: Request, res: Response) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    res.send(order);
  } else {
    res.status(404).send({ message: "Order not found" });
  }
};

export const getOrderHistory = async (req: Request, res: Response) => {
  const orders = await Order.find({ user: req.params.userId });
  if (orders) {
    res.send(orders);
  } else {
    res.status(404).send({ message: "Order history not found" });
  }
};
