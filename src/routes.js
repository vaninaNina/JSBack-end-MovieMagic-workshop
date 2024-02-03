const router = require("express").Router();

const homeController = require("../src/controllers/homeController.js");
const movieController = require("../src/controllers/movieController.js");
const castController = require("../src/controllers/castController.js");
const authController = require("../src/controllers/authController.js");

router.use(homeController);
router.use(movieController);
router.use("/cast", castController);
router.use("/auth", authController);

router.get("*", (req, res) => {
  res.redirect("/404");
});

module.exports = router;
