// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

// Dotenv Config
dotenv.config();

// Database Connection
connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Test route
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);

// Validation Middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
  console.log(`App Started on Port: ${PORT} in ${process.env.DEV_MODE} mode.`);
});
