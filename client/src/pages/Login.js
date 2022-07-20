import React, { useRef } from 'react'
import { Container, Row, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleOnSubmit = e =>{
    e.preventDefault();

    const email = emailRef.current.value
    const password = passwordRef.current.value
    console.log(email, password)

  }
  return (
    <>
      <MainLayout>
        <section>
          <Container>
            <div className="page-title">
              <h2>Welcome Back</h2>
            </div>
            <Row>
              <div className="col-sm-12 col-md-6 offset-md-3">
                <div className="login">
                  <div className="login-form">
                    <Form onSubmit={handleOnSubmit}>
                      <Form.Group className="mb-4">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required ref={emailRef} type="email" placeholder="Enter email" />

                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required ref={passwordRef} type="password" placeholder="Password" />
                      </Form.Group>

                      <Button variant="primary" type="submit">
                        Login
                      </Button>
                    </Form>
                    <div className="form-bottom">
                      <h3>Register New account? <Link to="/register">Register</Link></h3>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </section>
      </MainLayout>
    </>
  )
}

export default Login