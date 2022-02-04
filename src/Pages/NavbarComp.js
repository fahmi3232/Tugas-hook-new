import React from "react";
import { Col, Container, Row, Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import '../Component/MovieComp/style.css'

const NavbarComp = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Navbar fixed="top" bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#" className="logo">Stream Vid</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <Nav.Link>Live</Nav.Link>
                    <Nav.Link>Proliga</Nav.Link>
                    <Nav.Link>Sports</Nav.Link>
                    <Nav.Link>Premier</Nav.Link>
                    <Nav.Link>TV Show</Nav.Link>
                    <Nav.Link>Movies</Nav.Link>
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
