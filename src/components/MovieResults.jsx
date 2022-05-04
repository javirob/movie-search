import { useMoviesContext } from '../context/movies/MoviesContext';
import { Link } from 'react-router-dom';
import { Loading, Pagination } from '../components';

const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const MovieResults = () => {
  const { movies, isLoading } = useMoviesContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Pagination />
      <div className='p-6 mx-auto  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
        {movies.map((movie) => {
          const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;
          return (
            <Link
              to={`/movie/${id}`}
              key={id}
              className=' transition-transform bg-neutral  my-4 mx-auto rounded max-w-sm rounded overflow-hidden shadow-lg hover:scale-110  '
            >
              <div>
                <img
                  className='custom-img rounded'
                  src={poster === 'N/A' ? url : poster}
                  alt={title}
                />
                <div className='p-5 text-center bg-neutral text-neutral-content'>
                  <span className='mr-2'>{title}</span>
                  <span>- {year}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Pagination />
    </>
  );
};

export default MovieResults;
