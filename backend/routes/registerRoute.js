const express = require("express");
const bcrypt = require("bcrypt");
const { userModel } = require("../models/userModel");
const userRouter = express.Router();
const JWT = require("jsonwebtoken");

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not Registered",
      });
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return res.status(404).send({
          success: false,
          message: "Invaild Password",
        });
      } else {
        const token = JWT.sign({ _id: user._id }, process.env.Secret_Code, {
          expiresIn: "7d",
        });
        res.status(200).send({
          success: true,
          message: "Login Successfully",
          users: {
            name: user.name,
            email: user.email,
            phone: user.phone,
          },
          token,
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Error in Login",
      err,
    });
  }
});

userRouter.post("/register", async (req, res) => {
  const { name, email, password, phone } = req.body;
  try {
    bcrypt.hash(password, 7, async (err, secure_pass) => {
      if (err) {
        console.log(err, "something wrong");
        res.status(500).send({
          success: false,
          message: "Error in Registration",
          err,
        });
      } else {
        const user = new userModel({
          name,
          email,
          password: secure_pass,
          phone,
        });
        await user.save();
        console.log("Register Successfully");
        res.status(201).send({
          success: true,
          message: "Register Successfully",
        });
      }
    });
  } catch (err) {
    console.log(err, "something wrong");
    res.send("something Wrong");
  }
});

module.exports = {
  userRouter,
};
