import express from "express";
import cors from "cors";
import { connectToDB } from "./config/db.js";
import bookRouter from "./routes/bookRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

import dotenv from "dotenv";

const app = express();

dotenv.config();

const port = 5003;

connectToDB();

app.use(cors());
app.use(express.json());

app.get("api/test", (req, res) => {
  res.json({
    success: true,
    message: "This is test route!",
  });
});

app.use("/api/auth", userRoutes);

app.use("/api/books", bookRouter);

app.use("/api/transactions", transactionRoutes);

app.use("/api/members", memberRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.listen(port, () => {
  console.log(new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString());

  console.log(`Server running on ${port}`);
});
