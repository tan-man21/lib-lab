import logo from './logo.svg';
import './App.css';
import CurrentUserProvider from './contexts/CurrentUser'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BookGallery from './components/BookGallery';
import MyBooks from './components/MyBooks';
import BookDetails from './components/BookDetails';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


function App() {

  const { bookId } = useParams()

    const [theBook, setTheBook] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4000/books/${bookId}`)
            const resData = await response.json()
            setTheBook(resData)
        }
        fetchData()
    }, [bookId])


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
          <Route path={`/books/:bookId`} element={<BookDetails />} />
        </Routes>
      </Fragment>
    </Router>
    // </CurrentUserProvider>
  );
}

export default App;
