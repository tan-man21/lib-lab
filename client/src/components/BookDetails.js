import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import NavBar from "./NavBar";
import Button from 'react-bootstrap/Button'

function BookDetails({book}){

    const { bookId } = useParams()

    const navigate = useNavigate()

    const [theBook, setTheBook] = useState({})
    const [theBookAvailability, setTheBookAvailability] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4000/books/${bookId}`)
            const resData = await response.json()
            setTheBook(resData)
            setTheBookAvailability(resData.available)
        }
        fetchData()
    }, [bookId])

    const updateAvailablitity = async e => {
      try {
        const response = await fetch(`http://localhost:4000/books/${theBook.bookId}`, {
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
        console.log(`Added ${theBook.title}, ${theBook.bookId} to MyBooks!`)
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
        <Fragment>
            <NavBar />
            <Button variant="outline-danger" href="/books">Back</Button>
            <div className="book-details-container">
                <Card style={{ width: '14rem', height: '425px', margin: '10px', cursor: 'pointer'}} className='cardBody'>
                    <Card.Img variant="top" src={theBook.image} alt={theBook.title} style={{height: '250px'}} />
                    <Card.Body>
                    <Card.Title>{theBook.title}</Card.Title>
                    <Card.Text>
                        {theBook.author}
                    </Card.Text>
                    {bookAddButton}
                    </Card.Body>
                </Card>
            </div>
            <h5>{theBook.description}</h5>
        </Fragment>
        )
}

export default BookDetails