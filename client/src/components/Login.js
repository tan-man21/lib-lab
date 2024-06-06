import NavBar from "./NavBar"
import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row"
import Stack from 'react-bootstrap/Stack'

function Login() {

    return (
        <div style={{backgroundColor: '#5a729d', height: '100vh'}}>
            <NavBar />
            <div className="signup-container">
                <h1 style={{textAlign: 'center', marginBottom: '40px'}}>Sign Up Here</h1>
                <Form className="p-2">
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
                            Login
                        </Button>
                        <Button variant="outline-dark">
                            Sign Up
                        </Button>
                    </Stack>
                    <Row style={{textAlign: 'center'}}>
                        <Form.Text>
                            Need to create an account?
                        </Form.Text>
                    </Row>
                </Form>
            </div>
        </div>
    )
}

export default Login