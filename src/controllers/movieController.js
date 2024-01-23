const router = require("express").Router();

router.get("/create", (req, res) => {
  res.render("create");
});

router.get("/search", (req, res) => {
  res.render("search");
});

module.exports = router;
