const Cast = require("../models/Cast.js");
const Movie = require("../models/Movie.js");
exports.getAll = () => Cast.find();

exports.create = (castData) => Cast.create(castData);

exports.getByIds = async (castIds) => {
  const casts = Cast.find({ _id: { $in: castIds } });
  return casts;
};
