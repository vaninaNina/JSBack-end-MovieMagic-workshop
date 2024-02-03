const jwt = require("../lib/jwt.js");

const SECRET = "fospojfnsjncsj09429rjnfwonsmcssomdcsdm";
exports.auth = async (req, res, next) => {
  //get token, validate it
  const token = req.cookies["auth"];
  if (!token) {
    return next();
  }
  try {
    const decodedToken = await jwt.verify(token, SECRET);
    req.user = decodedToken;
    next();
  } catch {
    res.clearCookie("auth");
    res.redirect("/auth/login");
  }
};

exports.isAuth = (req, res, next) => {
  if ((!req, user)) {
    res.redirect("/auth/login");
  }
  next();
};
