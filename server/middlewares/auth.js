const User = require("../models/User");

const auth = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  try {
    let user = await User.findByToken(token);
    if (!user) {
      return res.json({ isAuth: false });
    }
    user.password = null;
    req.user = user;
    next();
  } catch (error) {
    res.json({ isAuth: false });
    throw error;
  }
};

module.exports = auth;
