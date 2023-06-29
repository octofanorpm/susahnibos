import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import signcust from "../../../../image/signcust.png";

const FormView = () => {
  return (
      <div className="d-flex w-100">
        <div className="d-flex justify-content-center align-items-center vh-100 col-6">
          <Form>
            <h3>Welcome Back!</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
              />
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
              Sign In{/* {loading ? "Loading . . ." : "Sign In"} */}
            </Button>
            <p className="text-center">
              Don’t have an account?
              <Link to="/Admin"> Sign Up for free</Link>
            </p>
          </Form>
        </div>
      <div className="col-6 bg-primary">
        <img className="w-100 vh-120" src={signcust} />
      </div>
      </div>
  );
};

export default FormView;
