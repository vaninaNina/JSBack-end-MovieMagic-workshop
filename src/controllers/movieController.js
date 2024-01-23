const router = require("express").Router();

router.get("/create", (req, res) => {
  res.render("create");
});

router.get("/search", (req, res) => {
  res.render("search");
});

router.get("/movies/:movieId", (req, res) => {
  res.render("details");
});

module.exports = router;
