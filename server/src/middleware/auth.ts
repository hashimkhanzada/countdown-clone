import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const secret = "test";

const auth = async (req: any, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    let decodedData;

    if (token) {
      decodedData = jwt.verify(token, secret);

      req.id = decodedData?.id;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
