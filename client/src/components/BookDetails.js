import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import NavBar from "./NavBar";
import Button from 'react-bootstrap/Button'
import { CurrentUser } from "../contexts/CurrentUser";

function BookDetails(book){

  const { currentUser } = useContext(CurrentUser)

    const { bookId } = useParams()

    const [theBook, setTheBook] = useState(book)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false) //chatGPT
    // const [theBookAvailability, setTheBookAvailability] = useState(book.available)

    useEffect(() => {
        const fetchData = async () => {
        setLoading(true)
        try{
          const response = await fetch(`http://localhost:4000/books/${bookId}`)
          const resData = await response.json()
          setTheBook(resData)
          setLoading(false)
        } catch (err) {
          console.error(err.message)
          setError(err.message)
          setLoading(false)
        }
            // setTheBookAvailability(resData.available)
        }
        fetchData()
    }, [bookId, theBook.userId])

    let errorAlert = (
      <></>
    )

    if(error){
        errorAlert = (
            <>
            <Alert variant="danger" dismissible onClick={(e) => {
            e.stopPropagation();
            }} 
          >{error}</Alert>
            </>
        )
    }

    const addBook = async e => {
      if (currentUser) {
        setLoading(true)
        try {
          const response = await fetch(`http://localhost:4000/books/${theBook.bookId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({available: false, userId: currentUser.userId})
          })
          // setTheBookAvailability(false)
          const updatedBook = await response.json()
          setTheBook(updatedBook)
          setLoading(false)
        } catch (err) {
          console.error(err.message)
          setLoading(false)
        }
      } else {
        setError('Please login to add to MyBooks')
      }
    }

    const returnBook = async e => {
      if (currentUser && currentUser.userId === theBook.userId){
        setLoading(true)
        try {
          const response = await fetch(`http://localhost:4000/books/${theBook.bookId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({available: true, userId: null})
          })
          // setTheBookAvailability(true)
          const updatedBook = await response.json()
          setTheBook(updatedBook)
          setLoading(false)
        } catch (err) {
          console.error(err.message)
          setLoading(false)
        }
      }
    }

    function handleReturn(){
      returnBook();
    }

    function handleAdd() {
        addBook();
    }

    let bookAddButton = null

    if(loading) {
      bookAddButton = (
        <>
          <Button variant='outline-secondary' disabled>Loading...</Button>
        </>
      )
    } else if(theBook.available) {
      bookAddButton = (
        <>
          <Button variant='outline-primary' onClick={(e) => {
            e.stopPropagation();
            handleAdd()
          }}>Add to My Books</Button>
        </>
      )
    } else if (theBook && currentUser && currentUser.userId === theBook.userId) {
      bookAddButton = (
        <>
          <Button variant='outline-secondary' onClick={(e) => {
            e.stopPropagation();
            handleReturn()
          }}>Return</Button>
        </>
      )
    }  else {
      bookAddButton = (
        <>
          <Button variant='secondary' onClick={(e) => {e.stopPropagation()}} style={{opacity: '60%'}}>Unavailable</Button>
        </>
      )
    }

    return (
        <div style={{backgroundColor: '#a7b5ce', overflow: 'auto', height: '100vh'}}>
            <NavBar />
            <Button variant="danger" href="/books" style={{position: 'absolute', top: '70px', left: '10px'}}>Back</Button>
            <div className="book-details-container">
                <Card style={{ width: '14rem', height: '425px', margin: '10px', cursor: 'pointer'}} className='cardBody'>
                    <Card.Img variant="top" src={theBook.image} alt={theBook.title} style={{height: '250px'}} />
                    <Card.Body>
                    <Card.Title>{theBook.title}</Card.Title>
                    <Card.Text>
                        {theBook.author}
                    </Card.Text>
                    {bookAddButton}
                    {errorAlert}
                    </Card.Body>
                </Card>
            </div>
            <h5>{theBook.description}</h5>
        </div>
        )
}

export default BookDetails