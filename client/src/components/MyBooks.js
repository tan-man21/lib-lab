import { Fragment } from "react"
import BookCard from './BookCard';
import NavBar from './NavBar';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router';
import { useState, useEffect, useContext } from 'react';
import { CurrentUser } from '../contexts/CurrentUser';


function MyBooks() {

    const { currentUser } = useContext(CurrentUser)

    const navigate = useNavigate()

    const [myBooks, setMyBooks] = useState([])
    const [loading, setLoading] = useState(false)


    const fetchData = async () => {
        setLoading(true)
        try{
            const response = await fetch(`http://localhost:4000/books/userbooks`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            const resData = await response.json()
            setMyBooks(resData)
            setLoading(false)
        } catch (err) {
            console.error(err.message)
            setLoading(false)
        }
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
                <Container className="empty-book-container">
                    <Row style={{padding: '15px'}}>
                        <Col xs={6}>
                            <img src="stack-of-books.png" style={{width: '200px', marginLeft: '40px'}} />
                        </Col>
                        <Col xs={5} style={{paddingLeft: '45px'}}>
                            <h4 style={{paddingBottom: '25px'}}>Your Book List is Empty</h4>
                            <Button href="/books" variant="outline-primary">Add Books from our Book Gallery</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            </>
        )
    } else if(loading) {
        myBooksSection = (
            <>
                <div className="book-gallery-container">
                <Container className="empty-book-container">
                    <Row style={{padding: '15px'}}>
                        <Col xs={4}>
                            <img src="stack-of-books.png" style={{width: '200px', marginLeft: '10px'}} />
                        </Col>
                        <Col xs={7} style={{paddingLeft: '75px'}}>
                        <h3>Loading...</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
            </>
        )
    } else if(!currentUser) {
        myBooksSection = (
            <>
                <div className="book-gallery-container">
                <Container className="empty-book-container">
                    <Row style={{padding: '15px'}}>
                        <Col xs={4}>
                            <img src="stack-of-books.png" style={{width: '200px', marginLeft: '10px'}} />
                        </Col>
                        <Col xs={7} style={{paddingLeft: '75px'}}>
                        <h3>Please <a href="/signup">Sign Up</a> or <a href="/login">Login</a> to access My Books</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
            </>
        )
    } else {
        myBooksSection = (
            <>
            <div className="book-gallery-container">
                <h2 style={{textAlign: 'center'}}>Your Books</h2>
                <ul style={{textAlign: 'center'}}>
                    {myBooks.map((book) => {
                        return (
                            <li key={book.bookId} style={{listStyle: 'none', display: 'inline-block'}} onClick={() => navigate(`/books/${book.bookId}`)}>
                            <BookCard book={book} onBookReturn={handleBookReturn} />
                            </li>
                        )
                    })}
                </ul>
            </div>
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