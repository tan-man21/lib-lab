import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useState, useEffect, useContext } from 'react'
import { CurrentUser } from '../contexts/CurrentUser'

function CommentModal({ book, onSubmit, onHide, show}){

    const {currentUser} = useContext(CurrentUser)

    const [review, setReview] = useState({
        content: '',
        userId: ''
    })
    
    function reviewSubmit(e){
        e.preventDefault()
        onSubmit(review)
        setReview({
            content: '',
            userId: currentUser.userId
        })
      }

    return (
        <Modal show={show} onHide={onHide}>
            <Form onSubmit={reviewSubmit}>
            <Modal.Header closeButton>
              <Modal.Title> Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                  <Form.Label>Review</Form.Label>
                  <Form.Control as='textarea' id="content" name="content" required value={review.content} onChange={e => setReview({ ...review, content: e.target.value })} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={onHide}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Modal.Footer>
            </Form>
          </Modal>
    )
}

export default CommentModal