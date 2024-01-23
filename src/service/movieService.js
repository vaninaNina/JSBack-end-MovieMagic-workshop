const movies = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    genre: "Fantasy",
    director: "Chris Columbus",
    year: "2001",
    imageUrl:
      "https://standfirst-plazacinema-production.imgix.net/uploads/2020/08/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg?auto=compress,format&crop=faces,entropy,edges&fit=crop&q=75&w=1000&h=1500",
    rating: "5",
    description:
      "Harry Potter and the Philosopher's Stone (also known as Harry Potter and the Sorcerer's Stone) is a 2001 fantasy film directed by Chris Columbus and produced by David Heyman, from a screenplay by Steve Kloves, based on the 1997 novel of the same name by J. K. Rowling. It is the first instalment in the Harry Potter film series. The film stars Daniel Radcliffe as Harry Potter, with Rupert Grint as Ron Weasley, and Emma Watson as Hermione Granger. Its story follows Harry's first year at Hogwarts School of Witchcraft and Wizardry as he discovers that he is a famous wizard and begins his formal wizarding education.",
  },
];

exports.getAll = () => {
  return movies.slice();
};

exports.search = (title, genre, year) => {
  let result = movies.slice();
  if (title) {
    result = result.filter((movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  if (genre) {
    result = result.filter(
      (movie) => movie.genre.toLowerCase() === genre.toLowerCase()
    );
  }

  if (year) {
    result = result.filter((movie) => movie.year === year);
  }
  return result;
};

exports.getOne = (movieId) => {
  const movie = movies.find((movie) => movie._id === movieId);
  return movie;
};

exports.create = (movieData) => {
  movieData._id = movies[movies.length - 1]._id + 1;

  movies.push(movieData);
};
