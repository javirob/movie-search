import { FiLink } from 'react-icons/fi';
import { AiFillLinkedin } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';

const Footer = () => {
  return (
    <footer className='footer p-5 bg-neutral text-neutral-content footer-center'>
      <div className='container mx-auto flex justify-between align-center px-2 mx-2'>
        <div>
          <a
            href='https://javier-robles.netlify.app/'
            target='_blank'
            rel='noreferrer'
            className='flex align-center justify-center text-md hover:text-primary transition-all'
          >
            <FiLink className='mt-1 mr-1' />
            <span>Javi Spanish Dev - {new Date().getFullYear()}</span>
          </a>
        </div>
        <div className='flex gap-2 text-lg'>
          <a
            href='https://www.linkedin.com/in/javirv/'
            target='_blank'
            rel='noreferrer'
            className='hover:text-primary mr-2 transition-all'
          >
            <AiFillLinkedin />
          </a>
          <a
            href='https://github.com/javirob'
            target='_blank'
            rel='noreferrer'
            className='hover:text-primary transition-all'
          >
            <GoMarkGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
