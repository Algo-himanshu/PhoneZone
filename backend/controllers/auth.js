// controller/register.js
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../helpers/auth");
require("dotenv").config();

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name) return res.status(400).send("Name Is Required!!");
  if (!password) return res.status(400).send("Password Is Required!!");
  if (password.length < 6)
    return res
      .status(400)
      .send("Password Should Be Greater Than 6 Characters Long!!");

  const exist = await User.findOne({ email: email });
  if (exist) return res.status(400).send("Email is taken!");

  //hash Password

  const hashedPassword = await hashPassword(password);
  const user = new User({
    username: name,
    email,
    password: hashedPassword,
  });
  // Save the user to the database
  try {
    await user.save();
    console.log(user);
    return res.json({
      ok: true,
    });
  } catch (err) {
    console.log("Registration Failed :", err);
    res.status(400).send("Error!!!");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //error handelling
    if (!email) return res.status(400).send("Email Is Required!!");
    if (!password) return res.status(400).send("Password Is Required!!");

    //verification of email
    const user = await User.findOne({ email: email });
    if (!user) res.status(400).send("NO USER FOUND!!");

    //verification of password
    const match = await comparePassword(password, user.password);
    if (!match) res.status(400).send("Incorrect Password!!");

    //create signed token!!
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    user.password = undefined;
    res.json({
      token,
      user,
    });
  } catch (e) {
    console.log(e);
  }
};

// const currentUser = async (req, res) => {
//   // console.log(req.headers);
//   //
//   console.log(req.user);
// };
// controllers/auth.js

const currentUser = async (req, res) => {
  try {
    const user = User.findById(req.user._id);
    res.json({ ok: true });
  } catch (err) {
    res.status(400).send("Something went wrong!!");
  }
};

module.exports = { register, login, currentUser };
