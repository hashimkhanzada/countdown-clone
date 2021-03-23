import express, { Application, Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import productRoutes from "./routes/product";

const app: Application = express();
dotenv.config();

app.use("/api/products", productRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5002;

mongoose
  .connect(process.env.CONNECTION_URL || "", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);
