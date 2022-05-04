import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loading } from '../components';
import { API_ENDPOINT } from '../context/movies/MoviesContext';
import { Error } from '../pages';

const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const MoviePage = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState({ show: false, msg: '' });
  const { id } = useParams();

  const fetchMovie = async () => {
    const response = await fetch(`${API_ENDPOINT}&i=${id}`);

    const data = await response.json();

    if (data.Response === 'False') {
      setError({ show: true, msg: data.Error });
    } else {
      setMovie(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error.show) {
    return <Error msg={error.msg} />;
  }

  const {
    Actors,
    BoxOffice,
    Country,
    Director,
    Genre,
    Plot,
    Poster,
    Runtime,
    Title,
    Writer,
    Year,
    imdbRating,
  } = movie;

  return (
    <section className='mt-0 mb-4 px-4 mx-auto max-w-4xl '>
      <h1 className='text-4xl font-bold mx-auto mb-12 text-center '>{Title}</h1>
      <div className='lg:flex justify-center items-center gap-20 '>
        <div>
          <img
            src={Poster ? Poster : url}
            alt={Title}
            className='max-w-sm  mx-auto rounded-lg shadow-2xl'
          />
        </div>
        <div className='text-center mt-6 lg:mt-0 lg:text-left'>
          <h4 className='text-lg mb-2'>
            <span className='font-bold'>Genre:</span> {Genre}
          </h4>
          <h4 className='text-lg mb-2'>
            {' '}
            <span className='font-bold'>Year:</span> {Year}
          </h4>
          <h4 className='text-lg mb-2'>
            {' '}
            <span className='font-bold'>Country: </span>
            {Country}
          </h4>
          <h4 className='text-lg mb-2'>
            {' '}
            <span className='font-bold'>Duration: </span>
            {Runtime}
          </h4>
          <h4 className='text-lg mb-2'>
            {' '}
            <span className='font-bold'>Box Office: </span>
            {BoxOffice}
          </h4>
          <h4 className='text-lg mb-2'>
            {' '}
            <span className='font-bold'>imdb Rating:</span> {imdbRating}
          </h4>
        </div>
      </div>

      <div className='bg-base-200 px-4 py-2 mt-10 rounded'>
        <h3 className='text-3xl mt-4 mb-3 font-bold'>Plot</h3>
        <p className='mb-4'>{Plot}</p>

        <div className='flex items-center  gap-4 mb-3 py-1'>
          <h3 className='text-xl font-bold'>Director</h3>
          <p>{Director}</p>
        </div>

        <div className='flex items-center  gap-3 mb-3 py-1'>
          <h3 className='text-xl mb-2 font-bold mr-2'>Writters</h3>
          <p>{Writer}</p>
        </div>

        <div className='flex items-center  gap-3 mb-3 py-1'>
          <h3 className='text-xl mb-2 font-bold mr-2'>Actors</h3>
          <p>{Actors}</p>
        </div>
      </div>

      <div className='text-center mt-6 '>
        <Link to='/' className='btn btn-primary hover:bg-primary-content hover:text-primary'>
          Back to Movies
        </Link>
      </div>
    </section>
  );
};

export default MoviePage;
