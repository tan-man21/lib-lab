import { Fragment } from "react"
import BookCard from './BookCard';
import NavBar from './NavBar';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router';
import { useState, useEffect, useContext } from 'react';
import { CurrentUser } from '../contexts/CurrentUser';


function MyBooks() {

    const { currentUser } = useContext(CurrentUser)

    const navigate = useNavigate()

    const [myBooks, setMyBooks] = useState([])


    const fetchData = async () => {
        const response = await fetch(`http://localhost:4000/books/userbooks`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        const resData = await response.json()
        setMyBooks(resData)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleBookReturn = (bookId) => {
        setMyBooks(myBooks.filter(book => book.bookId !== bookId));
    };

    let myBooksSection = (
        <></>
    )

    if(currentUser && myBooks.length === 0) {
        myBooksSection = (
            <>
            <div className="book-gallery-container">
                <div className="empty-book-container">
                    <img src="stack-of-books.png" />
                    <h4>Your Book List is Empty</h4>
                    <Button href="/books">Add Books from our Book Gallery</Button>
                </div>
            </div>
            </>
        )
    } else if(!currentUser) {
        myBooksSection = (
            <><h3>Please <a href="/signup">Sign Up</a> or <a href="/login">Login</a> to access My Books</h3></>
        )
    } else {
        myBooksSection = (
            <>
                <ul style={{textAlign: 'center'}}>
                    {myBooks.map((book) => {
                        return (
                            <li key={book.bookId} style={{listStyle: 'none', display: 'inline-block'}} onClick={() => navigate(`/books/${book.bookId}`)}>
                            <BookCard book={book} onBookReturn={handleBookReturn} />
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }

    return (
        <Fragment>
            <NavBar />
            {myBooksSection}
        </Fragment>
    )
}

export default MyBooks