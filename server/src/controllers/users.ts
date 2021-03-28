import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user";

const secret = "test";

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid username or password" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      secret,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error, check console for more details", err });
  }
};

export const signup = async (req: Request, res: Response) => {
  const { email, password, firstName, lastName, address } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      address,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });

    res.status(201).json({ result, token });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error, check console for more details", err });

    console.log(err);
  }
};
