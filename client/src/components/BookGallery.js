import React, { Fragment } from 'react';
import { useEffect, useState } from 'react';
import BookCard from './BookCard';
import NavBar from './NavBar';

function BookGallery() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4000/books`)
            const resData = await response.json()
            setBooks(resData)
        }
        fetchData()
    }, [])

    return (
        <Fragment>
            <NavBar />
            <div className='book-gallery-container'>
                <h2 style={{textAlign: 'center'}}>Explore Our Books</h2>
                <ul style={{textAlign: 'center'}}>
                    {books.map((book) => {
                        return (
                            <li key={book.bookId} style={{listStyle: 'none', display: 'inline-block'}}>
                            <BookCard book={book} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Fragment>
    )
}

export default BookGallery