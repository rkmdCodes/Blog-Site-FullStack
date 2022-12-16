import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

function Login() {
    const [credentials, updateCredentails] = useState({
        username: "",
        password: ""
    })
    function handleChange(event) {
        const curr = event.target.name;
        const value = event.target.value;
        updateCredentails((preValue) => {
            return {
                ...preValue,
                [curr]: value
            }
        })
    }

    function handleSubmit(event) {
        axios.post('http://localhost:5000/login', {
            UserName: credentials.username,
            Password: credentials.password
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        updateCredentails({
            username: "",
            password: ""
        });
        event.preventDefault();
    }
    return (
        <Form className="container login-form">
            <h1  >Log in</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={handleChange} name="username" value={credentials.username} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    This Will be kept confidential
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={handleChange} name="password" value={credentials.password} type="password" placeholder="Password" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I am not a Robot" />
            </Form.Group> */}
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>

    );
}
export default Login;