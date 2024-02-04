const jwt = require("jsonwebtoken");
const User = require("../Models/users");

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];

    if (!token) {
      return res.status(401).json({ msg: "No token" });
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET || "defaultSecret");

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ msg: "No user connected" });
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token invalid" });
  }
};

module.exports = isAuth;