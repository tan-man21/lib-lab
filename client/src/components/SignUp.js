import NavBar from "./NavBar"
import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row"
import Stack from 'react-bootstrap/Stack'
import { useState } from "react"
import { Navigate } from "react-router"

function SignUp() {

    const navigate = Navigate()

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    async function handleSubmit(e){
        e.preventDefault();

        await fetch(`http://localhost:4000/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        navigate('/')
    }

    return (
        <div style={{backgroundColor: '#5a729d', height: '100vh'}}>
            <NavBar />
            <div className="signup-container">
                <h1 style={{textAlign: 'center', marginBottom: '40px'}}>Sign Up Here</h1>
                <Form className="p-2" onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="Harry" required id="firstName" name="firstName" value={user.firstName} onChange={e => setUser({...user, firstName: e.target.value})} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Potter" required id="lastName" name="lastName" value={user.lastName} onChange={e => setUser({...user, lastName: e.target.value})} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="hedwig@hogwarts.com" required id="email" name="email" value={user.email} onChange={e => setUser({...user, email: e.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="nimbus2000" required id="password" name="password" value={user.password} onChange={e => setUser({...user, password: e.target.value})} />
                    </Form.Group>

                    <Stack gap={5} className="col-md-4 mx-auto">
                        <Button variant="dark" type="submit">
                            Sign Up
                        </Button>
                        <Button variant="outline-dark" href="/login">
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