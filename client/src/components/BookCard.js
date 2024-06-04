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
}