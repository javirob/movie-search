import { useMoviesContext } from '../context/movies/MoviesContext';

const MovieSearch = () => {
  const { query, setQuery } = useMoviesContext();

  return (
    <div className='card mx-auto w-full lg:w-2/3 bg-primary-content shadow-xl mb-5'>
      <div className='card-body'>
        <h2 className='card-title mx-auto mb-4 text-2xl md:text-4xl font-bold text-indigo-900 '>
          Movie Search
        </h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type='text'
            placeholder='Enter a movie name...'
            className='text-indigo-900 input input-lg w-full rounded'
          />
        </form>
      </div>
    </div>
  );
};

export default MovieSearch;
