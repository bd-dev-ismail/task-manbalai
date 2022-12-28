import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function MainNavbar() {
  return (
    <>
      <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.ibb.co/7k22JN8/nav-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#dashboard" className=" text-white">
              Dashboard
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;
