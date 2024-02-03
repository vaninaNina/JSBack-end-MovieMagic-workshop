const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");
const handlebars = require("express-handlebars");
const path = require("path");
const port = 5000;

const routes = require("../src/routes.js");

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
app.use(cookieParser());

app.use(routes);

mongoose
  .connect(`mongodb://localhost:27017/magic-movies`)
  .then(() => {
    console.log(`DB connected`);
    app.listen(port, () =>
      console.log(`The server is listening on port ${port}`)
    );
  })
  .catch((err) => console.log(`cannot connect to DB`));
