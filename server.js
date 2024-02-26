// const express = require("express");
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Job Portal</h1>");
});

app.listen(3000, (req, res) => {
  console.log("App Started on Port:", 3000);
});
