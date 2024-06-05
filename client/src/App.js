import logo from './logo.svg';
import './App.css';
import CurrentUserProvider from './contexts/CurrentUser'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BookGallery from './components/BookGallery';
import MyBooks from './components/MyBooks';

function App() {
  return (
    // <CurrentUserProvider>
    <Router>
      <Fragment>
        <Routes>
          <Route path='/' element={
            <Fragment>
              <NavBar />
              <Hero />
            </Fragment>
          }/>
          <Route path='/books' element={<BookGallery />} />
          <Route path='/mybooks' element={<MyBooks />}/>
        </Routes>
      </Fragment>
    </Router>
    // </CurrentUserProvider>
  );
}

export default App;
