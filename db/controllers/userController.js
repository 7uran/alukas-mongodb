const bcyrpt = require("bcryptjs");
const users = require("../models/UserModel");
const jsonwebtoken = require("jsonwebtoken");

const AuthRegister = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const passwordEncyrpted = bcyrpt.hashSync(password, 10);
    const user = new users({
      email: email,
      password: passwordEncyrpted,
      name: name,
    });
    const newUser = await user.save();
    res.status(201).json({
      sucess: true,
      newUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const AuthLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await users.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ message: "username and password is Wrong" });
    }
    const isMatch = await bcyrpt.compare(password, user?.password);
   
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "username and password is Wrong" });
    }
    const payload = {
      user: user,
    };
    jsonwebtoken.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          message: "Login success",
          token: token,
          data: user,
        });
      }
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { AuthRegister, AuthLogin };