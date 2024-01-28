const Cast = require("../models/Cast.js");

exports.getAll = () => Cast.find();

exports.create = (castData) => Cast.create(castData);
