import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Top() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">Share your space</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">John Doe</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Top;
