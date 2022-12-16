import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

function Register() {
    const [details, updateDetailes] = useState({
        name: "",
        email: "",
        password: ""
    })

    function handleChange(event) {
        const value = event.target.value;
        const curr = event.target.name;
        updateDetailes((preValue) => {
            return {
                ...preValue,
                [curr]: value
            }
        })
    }
    function handleSubmit(event) {

        axios.post('http://localhost:5000/signup', {
            name: details.name,
            email: details.email,
            password: details.password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        updateDetailes({
            name: "",
            email: "",
            password: ""
        });
        event.preventDefault();
    }

    return (
        <Form className="container login-form">
            <h1>Register</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={handleChange} name="name" value={details.name} type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={handleChange} name="email" value={details.email} type="email" placeholder="Enter Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={handleChange} name="password" value={details.password} type="password" placeholder="Password" />
            </Form.Group>
        
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    
    );
}
export default Register;