import { createContext, useState, useEffect, useContext } from 'react';
import paginate from '../utils';

const MoviesContext = createContext();

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const MoviesProvider = ({ children }) => {
  const [query, setQuery] = useState('blade runner');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });
  const [moviesData, setMoviesData] = useState(null);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(0);

  // fetch movies
  const fetchMovies = async (url) => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === 'True') {
      setMoviesData(paginate(data.Search));
      setError({ show: false, msg: '' });
      setPage(0);
    } else {
      setError({ show: true, msg: data.Error });
    }
    setIsLoading(false);
  };

  // call fetch movies if theres some text after 500ms the user stopped typping
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim() !== '') {
        fetchMovies(`${API_ENDPOINT}&s=${query}`);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  // set movies array for each page
  useEffect(() => {
    if (isLoading) return;
    setMovies(moviesData[page]);
  }, [isLoading, page]);

  return (
    <MoviesContext.Provider
      value={{
        isLoading,
        error,
        movies,
        query,
        moviesData,
        page,
        setQuery,
        setPage,
        setError,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

const useMoviesContext = () => {
  return useContext(MoviesContext);
};

export { MoviesContext, MoviesProvider, useMoviesContext };
