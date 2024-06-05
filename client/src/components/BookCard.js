import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react';

function BookCard({book}) {

    const [theBook, setTheBook] = useState([])
    const [theBookAvailability, setTheBookAvailability] = useState(book.available)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4000/books/${book.bookId}`)
            const resData = await response.json()
            setTheBook(resData)
        }
        fetchData()
    }, [book.bookId])

    const updateAvailablitity = async e => {
      try {
        const response = await fetch(`http://localhost:4000/books/${book.bookId}`, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({available: false})
        })
        setTheBookAvailability(false)
      } catch (err) {
        console.error(err.message)
    }
    }

    function handleClick() {
        updateAvailablitity();
        console.log(`Added ${book.title}, ${book.bookId} to MyBooks!`)
    }

    let bookAddButton = null

    if(theBookAvailability) {
      bookAddButton = (
        <>
          <Button variant='outline-primary' onClick={(e) => {
            e.stopPropagation();
            handleClick()
          }}>Add to My Books</Button>
        </>
      )
    } else {
      bookAddButton = (
        <>
          <Button variant='secondary' onClick={(e) => {e.stopPropagation()}} style={{opacity: '60%'}}>Unavailable</Button>
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