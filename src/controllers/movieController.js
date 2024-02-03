const router = require("express").Router();

const movieService = require("../service/movieService.js");
const castService = require("../service/castService.js");
const { isAuth } = require("../middlewares/authMiddleware.js");

router.get("/create", isAuth, (req, res) => {
  res.render("create");
});

router.post("/create", isAuth, async (req, res) => {
  const newMovie = req.body;
  try {
    await movieService.create(newMovie);
    res.redirect("/");
  } catch (err) {
    console.log(err.message);
    res.redirect("/create");
  }
});

router.get("/movies/:movieId", async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await movieService.getOne(movieId).lean();
  // const casts = await castService.getByIds(movie.casts).lean();
  movie.rating = new Array(Number(movie.rating)).fill(true);

  res.render("details", { movie });
});

router.get("/movies/:movieId/attach", isAuth, async (req, res) => {
  const movie = await movieService.getOne(req.params.movieId).lean();
  const casts = await castService.getAll().lean();
  //Todo remove already added casts
  res.render(`movie/attach`, { ...movie, casts });
});

router.post("/movies/:movieId/attach", isAuth, async (req, res) => {
  const castId = req.body.cast;

  await movieService.attach(req.params.movieId, castId);
  res.redirect(`/movies/${req.params.movieId}/attach`);
});

router.get("/movies/:movieId/edit", isAuth, async (req, res) => {
  if (!req.user) {
    return res.redirect("/login");
  }
  const movie = await movieService.getOne(req.params.movieId).lean();
  res.render("movie/edit", { movie });
});

module.exports = router;
