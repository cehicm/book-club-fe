import * as React from "react";
import { Alert } from "react-bootstrap";

class Reviews extends React.Component {
  render() {
    return (
      <Alert>
        <Alert.Heading>Review Heading </Alert.Heading>
        <p>
          {" "}
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
      </Alert>
    );
  }
}

export default Reviews;
