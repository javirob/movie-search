import { BiCameraMovie } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar mb-10 shadow-lg bg-primary text-primary-content'>
      <div className='container mx-auto'>
        <div className='flex items-center gap-x-1 px-2 mx-2 hover:text-base-100 transition-all'>
          <BiCameraMovie className='pr-1 text-3xl ' />
          <Link to='/' className='pt-1 text-lg  font-bold align-middle'>
            MovieDB
          </Link>
        </div>
        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end gap-x-4 text-md sm:text-lg '>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'text-base-100 underline underline-offset-2' : undefined
              }
            >
              Home
            </NavLink>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive ? 'text-base-100 underline underline-offset-2' : undefined
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
