import NavBar from "./NavBar"
import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row"
import Stack from 'react-bootstrap/Stack'

function SignUp() {

    return (
        <div style={{backgroundColor: '#5a729d', height: '100vh'}}>
            <NavBar />
            <div className="signup-container">
                <h1 style={{textAlign: 'center', marginBottom: '40px'}}>Sign Up Here</h1>
                <Form className="p-2">
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="Harry" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Potter" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="hedwig@hogwarts.com" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="nimbus2000" />
                    </Form.Group>

                    <Stack gap={5} className="col-md-4 mx-auto">
                        <Button variant="dark" type="submit">
                            Sign Up
                        </Button>
                        <Button variant="outline-dark">
                            Login
                        </Button>
                    </Stack>
                    <Row style={{textAlign: 'center'}}>
                        <Form.Text>
                            Already have an account?
                        </Form.Text>
                    </Row>
                </Form>
            </div>
        </div>
    )
}

export default SignUp