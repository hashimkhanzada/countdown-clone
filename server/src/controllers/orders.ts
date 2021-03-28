import { Request, Response } from "express";

import Order from "../models/order";

export const newOrder = async (req: Request, res: Response) => {
  try {
    res.status(200).json("success");
  } catch (err) {
    res.status(500).json(err);
  }
};
