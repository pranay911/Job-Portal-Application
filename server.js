// const express = require("express");
import express from "express";
import dotenv from "dotenv";

// Dotenv Config
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Job Portal</h1>");
});

app.listen(PORT, (req, res) => {
  console.log(`App Started on Port: ${PORT} in ${process.env.DEV_MODE} mode.`);
});
