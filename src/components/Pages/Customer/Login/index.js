import React, { useContext } from 'react'
import Button from "react-bootstrap/Button";
import { AuthContext } from '../../../context/auth';
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const FormView = () => {
  const [postAuth, data] = useContext(AuthContext);
  const { loading } = data;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    postAuth({ email: email.value, password: password.value });
    console.log("Login successful!");
  };

  // if (dataAuth.access_token)

  return (
    <div className="d-flex w-100">
      <div className="d-flex justify-content-center align-items-center vh-100 col-6">
        <Form onSubmit={handleOnSubmit}>
          <h3>Welcome Back!</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We&#39;ll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button className="btn btn-primary btn-block w-100" type="submit">
            {loading ? "Loading . . ." : "Sign In"}
          </Button>
          <p className="text-center">
            Don’t have an account?
            <Link to="/Admin"> Sign Up for free</Link>
          </p>
        </Form>
      </div>
      <div className="bg-primary col-6"></div>
    </div>
  );
};

export default FormView;
