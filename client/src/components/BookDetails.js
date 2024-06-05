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

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4000/books/${bookId}`)
            const resData = await response.json()
            setTheBook(resData)
        }
        fetchData()
    }, [bookId])

    return (
        <Fragment>
            <NavBar />
            <Button variant="outline-danger" href="/books">Back</Button>
            <div className="book-details-container">
                <Card style={{ width: '13rem', height: '450px', margin: '10px', cursor: 'pointer'}} className='cardBody'>
                    <Card.Img variant="top" src={theBook.image} alt={theBook.title} style={{height: '300px'}} />
                    <Card.Body>
                    <Card.Title>{theBook.title}</Card.Title>
                    <Card.Text>
                        {theBook.author}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <h5>{theBook.description}</h5>
        </Fragment>
        )
}

export default BookDetails