import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CurrentUser } from '../contexts/CurrentUser';

function ReviewCard({ review }){

    const { currentUser } = useContext(CurrentUser)

    let deleteButton = null

    if(review.user.userId === currentUser?.userId){
        deleteButton = (
            <>
                <Button variant='outline-danger'>Delete</Button>
            </>
        )
    }


    return (
        <Card style={{ width: '18rem', marginBottom: '10px', marginRight: '10px' }}>
            <Card.Header>
                <Card.Title>{review.user.firstName}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                {review.content}
                </Card.Text>
                {deleteButton}
            </Card.Body>
        </Card>
    )
}

export default ReviewCard