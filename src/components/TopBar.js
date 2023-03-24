import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Top() {
  return (
    <Navbar style={{ backgroundColor: "rgb(19, 47, 76)", color: "white" }}>
      {/* <Container> */}
      <Navbar.Brand
        className="ms-4 secondary"
        style={{ color: "rgb(102, 178, 255)" }}
      >
        Share your space
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end me-4">
        <Navbar.Text>
          Signed in as: <a href="#login">John Doe</a>
        </Navbar.Text>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default Top;
