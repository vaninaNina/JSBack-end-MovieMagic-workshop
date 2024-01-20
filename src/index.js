const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const path = require("path");
const port = 5000;

const routes = require("./views/routes.js");

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

app.use(routes);

app.listen(port, () => console.log(`The server is listening on port ${port}`));
