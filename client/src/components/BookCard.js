import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function BookCard({book}) {

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

    if (theBook === null) {
        return <h1>Loading</h1>
    }

    return (
        <Card style={{ width: '13rem', height: '450px', margin: '10px', cursor: 'pointer'}} className='cardBody'>
            <Card.Img variant="top" src={book.image} alt={book.title} style={{height: '300px'}} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>
                {book.author}
              </Card.Text>
            </Card.Body>
        </Card>
        )
}

export default BookCard