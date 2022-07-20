import React, { useState } from 'react'
import { Container, Row, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'

const initialState ={
  fName:"",
  lLast:"",
  email:"",
  password:"",
  confrimPassword:""
}

const Register = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setForm ({
      ...form,
      [name]:value,
    })
  }
  const handleOnSubmit = (e) =>{
    e.preventDefault();    
    console.log(form)
    setForm(initialState);
  }
 

return (
  <>
    <MainLayout>
      <section>
        <Container>
          <div className="page-title">
            <h2>Register New User</h2>
          </div>
          <Row>
            <div className="col-sm-12 col-md-6 offset-md-3">
              <div className="login">
                <div className="login-form">
                  <Form onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-4">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control required name="fName" type="text" placeholder="First Name" value={form.fName}  onChange={handleOnChange}/>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control required name="lName" type="text" placeholder="Last Name" value={form.lName}  onChange={handleOnChange} />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control required name="email" type="email" placeholder="Enter email" value={form.email}  onChange={handleOnChange} />
                    </Form.Group>


                    <Form.Group className="mb-4">
                      <Form.Label>Password</Form.Label>
                      <Form.Control required name="password" type="password" placeholder="Password" value={form.password}  onChange={handleOnChange} />
                    </Form.Group>


                    <Form.Group className="mb-4">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control required name="confirmPassword" type="password" placeholder="Confirm Password" value={form.confirmPassword}  onChange={handleOnChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Register
                    </Button>
                   
                  </Form>
                  <div className="form-bottom">
                    <h3>Already have account? <Link to="/login">Login</Link></h3>
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

export default Register