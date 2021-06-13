import { React } from "react";
import { Breadcrumb } from "react-bootstrap";

const Breadcrumbs = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="Home.js">Sign Up </Breadcrumb.Item>

        <Breadcrumb.Item href="Login.js">Log In</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
