import React from "react";
import { Container, Row, Col, Form, FloatingLabel } from "react-bootstrap";

const PropertyInfo = () => {
  const col1 = 2;
  const col2 = 3;
  const col3 = 2;
  const col4 = 3;
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={col1}>I am :</Col>
          <Col xs={4}>
            <Form>
              <div className="mb-3">
                <Form.Check
                  inline
                  label="Landlord"
                  name="group1"
                  type="radio"
                />
                <Form.Check
                  inline
                  label="Property Manager"
                  name="group1"
                  type="radio"
                />
                <Form.Check inline label="Tenant" name="group1" type="radio" />
              </div>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={col1}>Street Address :</Col>
          <Col xs={col2}>
            <FloatingLabel controlId="floatingTextarea" className="mb-3">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ width: "30rem" }}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col xs={col1}>Apartment Type</Col>
          <Col xs={col2}>
            <Form.Select
              aria-label="Default select example"
              style={{ width: "10rem" }}
            >
              <option value="1">House</option>
              <option value="2">Apartment</option>
              <option value="3">Town House</option>
            </Form.Select>
          </Col>
          <Col xs={col3}>Unit number:</Col>
          <Col xs={col4}>
            <Form.Control type="number" />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={col1}>Laundry</Col>
          <Col xs={col2}>
            <Form>
              <Form.Check inline label="Yes" name="group2" type="radio" />
              <Form.Check inline label="No" name="group2" type="radio" />
            </Form>
          </Col>
          <Col xs={col3}>Bed rooms:</Col>
          <Col xs={col4}>
            <Form.Control type="number" />
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          <Col xs={col1}>Parking</Col>
          <Col xs={col2}>
            <Form>
              <Form.Check inline label="Yes" name="group2" type="radio" />
              <Form.Check inline label="No" name="group2" type="radio" />
            </Form>
          </Col>
          <Col xs={col3}>Bath rooms:</Col>
          <Col xs={col4}>
            <Form.Control type="number" />
          </Col>
        </Row>
        <Row>
          <Col xs={col1}>Description :</Col>
          <Col xs={col2}>
            <FloatingLabel controlId="floatingTextarea" className="mb-3">
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
          </Col>
          <Col xs={col3}>Size of house:</Col>
          <Col xs={col4}>
            <Form.Control type="number" />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={col1}>Upload media</Col>
          <Col xs={col2}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control type="file" />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PropertyInfo;
