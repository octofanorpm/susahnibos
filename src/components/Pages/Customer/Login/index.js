import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import signcust from "../../../../image/signcust.png";
import axios from "axios";
import Cookies from "js-cookie";

const FormView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      // Make the API call to the Swagger API
      const response = await axios.post("<https://bootcamp-rent-cars.herokuapp.com/customer/auth/login>", {
        email,
        password,
      });

      // Handle the response from the API
      if (response.status === 200) {
        const { access_token } = response.data;

        // Save the access token to a cookie
        Cookies.set("access_token", access_token);

        // Successful login, perform any necessary actions
      } else {
        // Handle other response statuses if needed
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="d-flex w-100">
      <div className="d-flex justify-content-center align-items-center vh-100 col-6">
        <Form onSubmit={handleSubmit}>
          <h3>Welcome Back!</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button className="btn btn-primary btn-block w-100" type="submit">
            {loading ? "Loading . . ." : "Sign In"}
          </Button>
          {error && <p className="text-danger">{error}</p>}
          <p className="text-center">
            Don’t have an account?
            <Link to="/Admin"> Sign Up for free</Link>
          </p>
        </Form>
      </div>
      <div className="col-6 bg-primary">
        <img className="w-100 vh-120" src={signcust} alt="Sign Up" />
      </div>
    </div>
  );
};

export default FormView;
