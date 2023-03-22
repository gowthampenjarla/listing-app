import React from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";

const Rent = () => {
  const col1 = 2;
  const col2 = 3;

  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={col1}>Amount of Rent:</Col>
          <Col xs={col2}>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control aria-label="Amount (to the nearest dollar)" />
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={col1}>Security Deposit:</Col>
          <Col xs={col2}>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control aria-label="Amount (to the nearest dollar)" />
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={col1}>Property Availability:</Col>
          <Col xs={col2}>
            <Form.Control type="date" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={col1}>Duration of Lease:</Col>
          <Col xs={4}>
            <Form>
              <Form.Check
                className="mb-2"
                label="6 Months"
                name="group2"
                type="radio"
              />
              <Form.Check
                className="mb-2"
                label="12 Months"
                name="group2"
                type="radio"
              />
              <Form.Check
                className="mb-2"
                label="Negotiable"
                name="group2"
                type="radio"
              />
            </Form>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={col1}>Pet Policy:</Col>
          <Col xs={4}>
            <Form>
              <Form.Check
                className="mb-2"
                label="No pets"
                name="group2"
                type="checkbox"
              />
              <Form.Check
                className="mb-2"
                label="Cats only"
                name="group2"
                type="checkbox"
              />
              <Form.Check
                className="mb-2"
                label="Dogs only"
                name="group2"
                type="checkbox"
              />
              <Form.Check
                className="mb-2"
                label="Any pets"
                name="group2"
                type="checkbox"
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Rent;
