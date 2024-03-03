import express from "express";
import { registerController } from "../controllers/authController.js";
const router = express.Router();

// Routes
// Add New User
router.post("/register", registerController);

export default router;
