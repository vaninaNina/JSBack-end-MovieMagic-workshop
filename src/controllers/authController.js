const router = require("express").Router();

const authService = require("../service/authService.js");

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", async (req, res) => {
  const userData = req.body;
  await authService.register(userData);
  res.redirect("/auth/login");
});

module.exports = router;
