import * as React from "react";
import { Card, Button, Container, Form } from "react-bootstrap";
import AddBookForm from "./AddBookForm";
import Reviews from "./Reviews";

class BookList extends React.Component {
  render() {
    // const bookListApi = fetch(``);
    // const parsed = bookListApi.json();

    // parsed.map((bookListApi) => {
    //   for (let i of parsed) {
    //     //define by id
    //     conole.log(id);
    //   }
    // });

    //in return: <Card key={} style={{ width: "90%", marginTop: "30px" }}>

    return (
      <Container>
        <Card style={{ width: "90%", marginTop: "30px" }}>
          <Card.Img
            variant="top"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1791dda636d%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2C%26quot%3BLiberation%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1791dda636d%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5390625%22%20y%3D%2297.5%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          />
          <Card.Body>
            <Card.Title>Book Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
          <Form.Check inline label="Read" />
        </Card>
        <Reviews />
        <AddBookForm />
      </Container>
    );
  }
}

export default BookList;
