import Footer from "./Footer";
import NavBar from "./NavBar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function About() {


    return (
        <div className="about-container">
            <NavBar />
            <div className="about-background">
                <Row>
                    <Col className="about-text">
                        <h1 style={{fontWeight: 'bold'}}>About LibLab</h1>
                        <p>
                            Here at LibLab, we offer a wide selection of books that you can choose to add to your list! Make sure to <a href="/signup" style={{color: '#f8f9fa'}}>create an account</a> to interact with all of our features.
                        </p>
                    </Col>
                    <Col>
                        <img src="about.gif" />
                    </Col>
                </Row>
            </div>
            <Footer />
        </div>
    )
}

export default About