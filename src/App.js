import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Error, MoviePage } from './pages';
import { Navbar, Footer, Alert } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main className='container flex-1 mx-auto px-3 pb-12'>
          <Alert />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/movie/:id' element={<MoviePage />} />
            <Route path='/error' element={<Error />} />
            <Route path='/*' element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
