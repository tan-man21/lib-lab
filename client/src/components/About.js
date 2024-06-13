import Footer from "./Footer";
import NavBar from "./NavBar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser";


function About() {

    const {currentUser } = useContext(CurrentUser)

    let aboutPiece = null

    if(!currentUser){
        aboutPiece = (
            <>
            <p>Make sure to <a href="/signup" style={{color: '#f8f9fa'}}>create an account</a> to interact with all of our features.</p>
            </>
        )
    } else {
        aboutPiece = (
            <>
            <p>Go check it out!</p>
            </>
        )
    }


    return (
        <div className="about-container">
            <NavBar />
            <div className="about-background">
                <Row>
                    <Col className="about-text">
                        <h1 style={{fontWeight: 'bold'}}>About LibLab</h1>
                        <p>
                            Here at LibLab, we offer a wide selection of books that you can choose to add to your list! And for each book you can leave a personalized review. {aboutPiece}
                        </p>
                    </Col>
                    <Col>
                        <img src="about.gif" alt="book-gif" />
                    </Col>
                </Row>
            </div>
            <Footer />
        </div>
    )
}

export default About