import { FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <section className='max-w-2xl mx-auto'>
      <div className='mb-8'>
        <h1 className='text-4xl mb-6'>About</h1>
        <p className='text-lg mb-4'>
          This is a movie search and information app. It allows the user to look up a movie name and
          see detailed information for the movie.
        </p>
        <p className='text-lg mb-4'>
          The app uses React, React Hooks, React Router, Tailwind and the{' '}
          <a className='underline' href='https://www.omdbapi.com/' target='_blank' rel='noreferrer'>
            OMDb API
          </a>{' '}
          free API to get the data for the movies.
        </p>
        <p className='text-lg mb-4'>
          The website also features pagination of the results and shows each movie on a dedicated
          page.
        </p>
      </div>

      <div className='mb-6'>
        <h2 className='text-3xl mb-3'>Dependencies</h2>
        <ul className='my-6 list-disc pl-6'>
          <li className='mb-3'>React 18</li>
          <li className='mb-3'>React Router 6</li>
          <li className='mb-3'>TailwindCSS</li>
          <li className='mb-3'>DaisyUI</li>
          <li className='mb-3'>React Icons</li>
        </ul>

        <a
          href='https://github.com/javirob/movie-search'
          target='_blank'
          rel='noreferrer'
          className='btn btn-secondary'
        >
          <FaGithub className='mr-2' /> View Code
        </a>
      </div>

      <div className='mb-6'>
        <h2 className='text-3xl mb-3'>Hooks</h2>
        <ul className='my-6 list-disc pl-6'>
          <li className='mb-3'>useEffect</li>
          <li className='mb-3'>useState</li>
          <li className='mb-3'>useContext</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
