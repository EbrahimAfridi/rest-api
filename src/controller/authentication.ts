import express from "express";
import { userModel } from "../db/users";
import { authentication } from "../helper";
import { createUser } from "./users";

export const Register = async (req: express.Request, res: express.Response) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const user = await userModel.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    let hashedPassword = authentication(password, username, email);

    let newUser = createUser({ username, email, password: hashedPassword });
    // let newUser = await userModel.create({
    //   username,
    //   email,
    //   password: hashedPassword,
    // });

    return res
      .status(201)
      .json({ message: "User created successfully", newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
