import logo from './logo.svg';
import './App.css';
import CurrentUserProvider from './contexts/CurrentUser'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import { Fragment } from 'react';

function App() {
  return (
    // <CurrentUserProvider>
    <Fragment>
      <NavBar />
      <Hero />
    </Fragment>
    // </CurrentUserProvider>
  );
}

export default App;
