import zod from "zod";
import userModel from "../models/userModel.js";
export const registerController = async (req, res, next) => {
  // Zod Validation
  const userValidation = zod.object({
    name: zod.string().min(1).max(255),
    lastName: zod.string().min(1).max(255).optional(),
    email: zod.string().email(),
    password: zod.string().max(8),
  });
  // Register New User
  try {
    const { name, email, password } = userValidation.parse(req.body);

    if (!name) {
      next("Name is Required!!");
    }
    if (!email) {
      next("Email is Required!!");
    }
    if (!password) {
      next("Password is Required!!");
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      next("Email Already Register Please Login");
    }
    const newUser = await userModel.create({ name, email, password });
    res.status(201).send({
      success: true,
      message: "User Created Successfully !!",
    });
  } catch (err) {
    next(err);
  }
};
