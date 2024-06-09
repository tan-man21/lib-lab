import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { useState, useEffect, useContext } from 'react';
import { CurrentUser } from '../contexts/CurrentUser';

function BookCard({book}) {

    const { currentUser } = useContext(CurrentUser)
  
    const [theBook, setTheBook] = useState([])
    const [theBookAvailability, setTheBookAvailability] = useState(book.available)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4000/books/${book.bookId}`)
            const resData = await response.json()
            setTheBook(resData)
        }
        fetchData()
    }, [book.bookId])

    let errorAlert = (
      <></>
    )

    if(error){
        errorAlert = (
            <>
            <Alert variant="danger" dismissible onClick={(e) => {
            e.stopPropagation();
          }}>{error}</Alert>
            </>
        )
    }

    const updateAvailablitity = async e => {
      if (currentUser) {
        try {
          const response = await fetch(`http://localhost:4000/books/${book.bookId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({available: false, userId: currentUser.userId})
          })
          setTheBookAvailability(false)
        } catch (err) {
          console.error(err.message)
        }
      } else {
        setError('Please login to add to MyBooks')
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
              {errorAlert}
            </Card.Body>
        </Card>
        )
}

export default BookCard