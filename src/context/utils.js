const paginate = (movies) => {
  const itemsPerPage = 3;
  const numberOfPages = Math.ceil(movies.length / itemsPerPage);

  const newMovies = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return movies.slice(start, start + itemsPerPage);
  });

  return newMovies;
};

export default paginate;
