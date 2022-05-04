import { useMoviesContext } from '../../context/movies/MoviesContext';

const Pagination = () => {
  const { isLoading, moviesData, setPage, page } = useMoviesContext();

  const prevPage = () => {
    setPage((prevState) => {
      let prevPage = prevState - 1;
      if (prevPage < 0) {
        prevPage = moviesData.length - 1;
      }

      return prevPage;
    });
  };

  const nextPage = () => {
    setPage((prevState) => {
      let nextPage = prevState + 1;
      if (nextPage > moviesData.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  if (!isLoading) {
    return (
      <div className='btn-group justify-center pt-5'>
        <div
          className='btn bg-indigo-200 text-indigo-900  border-white hover:text-white'
          onClick={prevPage}
        >
          Prev
        </div>
        {moviesData.map((item, index) => {
          return (
            <button
              key={index}
              className={`btn bg-indigo-200 text-indigo-900  border-white hover:text-white ${
                index === page && 'bg-indigo-800 text-white'
              }`}
              onClick={() => setPage(index)}
            >
              {index + 1}
            </button>
          );
        })}
        <div
          className='btn bg-indigo-200 text-indigo-900  border-white hover:text-white'
          onClick={nextPage}
        >
          Next
        </div>
      </div>
    );
  }
};

export default Pagination;
