import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

const FormComp = () => {
    const [nama, setNama] = useState('')
    const [email, setEmail] = useState('')
    const [data, setData] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setData(`${nama} ${email}`)
        setNama('')
        setEmail('')
    }

  return (
    <div>
      <Container className="mt-5 text-left">
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicNama">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Enter Nama" value={nama} onChange={(e) => setNama(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            {
                data ? data : ""
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormComp;
