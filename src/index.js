const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const path = require("path");
const port = 5000;

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "static")));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(port, () => console.log(`The server is listening on port ${port}`));
