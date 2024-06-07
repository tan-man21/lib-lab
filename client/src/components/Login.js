import NavBar from "./NavBar"
import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form'
import Row from "react-bootstrap/Row"
import Stack from 'react-bootstrap/Stack'
import Alert from 'react-bootstrap/Alert'
import { CurrentUser } from "../contexts/CurrentUser"
import { useContext, useState } from 'react'
import { useNavigate } from "react-router"

function Login() {

    const navigate = useNavigate()

    const { setCurrentUser } = useContext(CurrentUser)

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState(null)

    async function handleSubmit(e){
        e.preventDefault()

        const response = await fetch(`http://localhost:4000/auth/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        const data = await response.json()
        
        if(response.status === 200){
            await setCurrentUser(data.user)
            navigate('/')
        } else{
            setError('Cannot Login, please try again!')
        }
    }

    let errorAlert = (
        <></>
    )

    if(error){
        errorAlert = (
            <>
            <Alert variant="danger" dismissible>{error}</Alert>
            </>
        )
    }

    return (
        <div style={{backgroundColor: '#5a729d', height: '100vh'}}>
            <NavBar />
            <div className="signup-container">
                <h1 style={{textAlign: 'center', marginBottom: '40px'}}>Login Here</h1>
                {errorAlert}
                <Form className="p-2" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="hedwig@hogwarts.com" id="email" name="email" value={credentials.email} onChange={e => setCredentials({...credentials, email: e.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-5">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="nimbus2000" id="password" name="password" value={credentials.password} onChange={e => setCredentials({...credentials, password: e.target.value})} />
                    </Form.Group>

                    <Stack gap={4} className="col-md-4 mx-auto">
                        <Button variant="dark" type="submit">
                            Login
                        </Button>
                        <Button variant="outline-dark" href="/signup">
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