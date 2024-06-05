import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react';
import { Alert } from 'bootstrap';

function BookCard({book}) {

    const [theBook, setTheBook] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4000/books/${book.bookId}`)
            const resData = await response.json()
            setTheBook(resData)
        }
        fetchData()
    }, [book.bookId])

    function handleClick() {
        console.log(`Added ${book.title}, ${book.bookId} to MyBooks!`)
    }

    let bookAddButton = null

    if(book.available === true) {
      bookAddButton = (
        <>
          <Button variant='primary' onClick={(e) => {
            e.stopPropagation();
            handleClick()
          }}>Add to My Books</Button>
        </>
      )
    } else {
      bookAddButton = (
        <>
          <Button variant='secondary' disabled>Unavailable</Button>
        </>
      )
    }

    return (
        <Card style={{ width: '14rem', height: '425px', margin: '10px', cursor: 'pointer'}} className='cardBody'>
            <Card.Img variant="top" src={book.image} alt={book.title} style={{height: '250px'}} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>
                {book.author}
              </Card.Text>
              {bookAddButton}
            </Card.Body>
        </Card>
        )
}

export default BookCard