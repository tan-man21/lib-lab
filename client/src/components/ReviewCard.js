import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CurrentUser } from '../contexts/CurrentUser';

function ReviewCard({ review }){

    const { currentUser } = useContext(CurrentUser)

    let deleteButton = null

    if(review.userId === currentUser.userId){
        deleteButton = (
            <>
                <Button variant='outline-danger'>Delete</Button>
            </>
        )
    }


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{review.user.firstName}</Card.Title>
                <Card.Text>
                {review.content}
                </Card.Text>
                {deleteButton}
            </Card.Body>
        </Card>
    )
}

export default ReviewCard