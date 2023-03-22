import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const ContactInfo = () => {
  const col1 = 2;
  const col2 = 4;
  return (
    <div>
      <Container fluid>
        <Row className="mb-4">
          <Col xs={col1}>Name *</Col>
          <Col xs={col2}>
            <Form.Control type="text" />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col xs={col1}>Email *</Col>
          <Col xs={col2}>
            <Form.Control type="text" />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col xs={col1}>Phone Number *</Col>
          <Col xs={col2}>
            <Form.Control type="text" />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col xs={col1}>Tour Availability</Col>
          <Col xs={col2}>
            <Form.Control as="textarea" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactInfo;
