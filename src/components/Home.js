import { React } from "react";
import "bootstrap";
import { Button, Form } from "react-bootstrap";
import "../custom.scss";
import Breadcrumbs from "./Breadcrumbs";

const Home = () => {
  return (
    <div>
      <Breadcrumbs />
      <Form className="block-example border border-dark">
        <Form.Group controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter a vaild email address"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="email" placeholder="Enter a password" />
        </Form.Group>

        <Button
          type="submit"
          className="btn btn-primary btn-block w-50 mx-auto"
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default Home;
