import React from "react";
import {
  Col,
  Container,
  Row,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../Component/MovieComp/style.css";

const NavbarComp = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Navbar fixed="top" bg="light"  expand="lg">
              <Container>
                <Navbar.Brand href="#" className="logo">
                  Stream Vid
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <LinkContainer to="/">
                      <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/list-movie">
                      <Nav.Link>Indonesia</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/india">
                      <Nav.Link>India</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/korea">
                      <Nav.Link>Korea</Nav.Link>
                    </LinkContainer>
                    {/* <LinkContainer to="/japanese">
                      <Nav.Link>Japanese</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/chinese">
                      <Nav.Link>Chinese</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/french">
                      <Nav.Link>French</Nav.Link>
                    </LinkContainer>
                    <NavDropdown title="More" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                    <LinkContainer to="/form">
                      <Nav.Link>Berlangganan</Nav.Link>
                    </LinkContainer> */}
                  </Nav>
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavbarComp;
