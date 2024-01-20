const router = require("express").Router();

const homeController = require("../controllers/homeController.js");
router.use(homeController);

const movieController = require("../controllers/movieController.js");
router.use(movieController);

router.get("*", (req, res) => {
  res.redirect("/404");
});

module.exports = router;
