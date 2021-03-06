
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../redux/user/user.actions";
import { useHistory } from "react-router";

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://tlts-back.maqware.com/api/admin/login', {
      method: 'POST',
      headers:  {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin':"*"
      }, 
      body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(data=> {
      if(data.user){
        console.log(data)
        dispatch(loginUserAction(user))
      localStorage.setItem('token', data.access_token.plainTextToken)
      history.push('/dashboard/overview')
      
      }else{
        console.log(data)
      }
    }
    )
    .catch(err=> console.log(err.message))

    // if(user.email === 'admin@gmail.com' && user.password === '123456'){

    // }
    // else{
      // alert(
      //   'Password is wrong'
      // )
    // }
  }

  const handleChange = e => {
    // setUser({ email : e.target.value, password : e.target.value}) 
    const {name, value} = e.target;
    setUser({...user, [name]: value});
    
  };

  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          {/* <p className="text-center">
            <Card.Link as={Link} to={Routes.DashboardOverview.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
            </Card.Link>
          </p> */}
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Sign in to our platform</h3>
                </div>
                {/* <pre>{JSON.stringify(user, undefined, 2)}</pre> */}
                <Form className="mt-4" onSubmit= {handleSubmit} >
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Enter Your Email</Form.Label>
                    <InputGroup >
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope}  />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="email" name='email' placeholder="Email" value={user.email} onChange={handleChange} />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Enter Your Password</Form.Label>
                      <InputGroup >
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control required type="password" name='password'placeholder="Password" value={user.password} onChange={handleChange} />
                      </InputGroup>
                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Form.Check type="checkbox">
                        <FormCheck.Input id="defaultCheck5" className="me-2" />
                        <FormCheck.Label htmlFor="defaultCheck5" className="mb-0">Remember me</FormCheck.Label>
                      </Form.Check>
                      <Link to="/examples/reset-password"> <Card.Link className="small text-end">Lost password?</Card.Link> </Link>
                    </div>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Sign in
                  </Button>
                </Form>

                {/* <div className="mt-3 mb-4 text-center">
                  <span className="fw-normal">or login with</span>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-facebook me-2">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button>
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-twitter me-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button>
                  <Button variant="outline-light" className="btn-icon-only btn-pil text-dark">
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Not registered?
                    <Card.Link as={Link} to={Routes.Signup.path} className="fw-bold">
                      {` Create account `}
                    </Card.Link>
                  </span>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
