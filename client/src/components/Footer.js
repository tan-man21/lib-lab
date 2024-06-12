import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {


    return (
        <Container className='footer' fluid>
            <Row xs={8}>
                <Col style={{textAlign: 'center'}}>@LibLab</Col>
            </Row>
        </Container>
    )
}

export default Footer