import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import adminlog from "../../../../image/adminlog.png";

const LoginAdm = () => {
  //   const [postAuth, data] = useContext(AuthContext);
  //   const { loading, dataAuth } = data;

  //   const handleOnSubmit = (e) => {
  //     e.preventDefault();
  //     const { email, password } = e.target.elements;
  //     postAuth({ email: email.value, password: password.value });
  //     console.log("Login successful!");
  //   };

  //   if (dataAuth.access_token)

  return (
    <div className="d-flex">
        <div className="col-8 bg-primary" >
      <img className="w-100 vh-100" src={adminlog} />
        </div>
      <div className="d-flex justify-content-center align-items-center vh-100 col-4">
        <Form>
          <h3>Welcome Back Admin BCR!</h3>
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
            Sign In {/* {loading ? "Loading . . ." : "Sign In"} */}
          </Button>
          <p className="text-center">
            Don’t have an account?
            <Link to="/signin"> Sign Up for free</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default LoginAdm;
