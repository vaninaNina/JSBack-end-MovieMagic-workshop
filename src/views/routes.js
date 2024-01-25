const router = require("express").Router();

const homeController = require("../controllers/homeController.js");
router.use(homeController);

const movieController = require("../controllers/movieController.js");
router.use(movieController);

const castController = require("../controllers/castController.js");
router.use("/cast", castController);

router.get("*", (req, res) => {
  res.redirect("/404");
});

module.exports = router;
