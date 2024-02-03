const router = require("express").Router();

const homeController = require("../src/controllers/homeController.js");
router.use(homeController);

const movieController = require("../src/controllers/movieController.js");
router.use(movieController);

const castController = require("../src/controllers/castController.js");
router.use("/cast", castController);

router.get("*", (req, res) => {
  res.redirect("/404");
});

module.exports = router;
