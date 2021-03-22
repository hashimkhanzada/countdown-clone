import express, { Application, Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";

import productRoutes from "./routes/product";

const app: Application = express();

app.use("/api/products", productRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://hashimkhanzada:bullsanga786@cluster0.b6rjp.mongodb.net/CountdownShopDB?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);
