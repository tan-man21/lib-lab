import { useEffect, useState } from 'react';


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

    
}