import React from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";

const Amenities = () => {
  const col1 = 6;

  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={col1}>
            <Row>
              <Col xs={6} className="mb-5">
                <Form.Check
                  className="mb-2"
                  label="Heating"
                  name="group2"
                  type="checkbox"
                />
              </Col>
              <Col xs={6}>
                <Form.Check
                  className="mb-2"
                  label="Wheelchair access"
                  name="group2"
                  type="checkbox"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={6} className="mb-5">
                <Form.Check
                  className="mb-2"
                  label="Air Conditioning"
                  name="group2"
                  type="checkbox"
                />
              </Col>
              <Col xs={6}>
                <Form.Check
                  className="mb-2"
                  label="Street Parking"
                  name="group2"
                  type="checkbox"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={6} className="mb-5">
                <Form.Check
                  className="mb-2"
                  label="Balcony"
                  name="group2"
                  type="checkbox"
                />
              </Col>
              <Col xs={6}>
                <Form.Check
                  className="mb-2"
                  label="Washer/Dryer"
                  name="group2"
                  type="checkbox"
                />
              </Col>
            </Row>
          </Col>
          <Col xs={4}>
            <div className="mb-4">Nearest Fire station Distance</div>
            <InputGroup className="mb-3">
              <Form.Control aria-label="Distance (to the nearest mile)" />
              <InputGroup.Text>miles</InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={col1}>
            <Row>
              <Col xs={6} className="mb-5">
                <Form.Check
                  className="mb-2"
                  label="Furnished"
                  name="group2"
                  type="checkbox"
                />
              </Col>
              <Col xs={6}>
                <Form.Check
                  className="mb-2"
                  label="24*7 Surveilliance"
                  name="group2"
                  type="checkbox"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={6} className="mb-5">
                <Form.Check
                  className="mb-2"
                  label="Garage Parking"
                  name="group2"
                  type="checkbox"
                />
              </Col>
              <Col xs={6}>
                <Form.Check
                  className="mb-2"
                  label="Smart locks"
                  name="group2"
                  type="checkbox"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={6} className="mb-5">
                <Form.Check
                  className="mb-2"
                  label="Refrigrator"
                  name="group2"
                  type="checkbox"
                />
              </Col>
              <Col xs={6}>
                <Form.Check
                  className="mb-2"
                  label="Microwave"
                  name="group2"
                  type="checkbox"
                />
              </Col>
            </Row>
          </Col>
          <Col xs={4}>
            <div className="mb-4">Nearest Hospital Distance</div>
            <InputGroup className="mb-3">
              <Form.Control aria-label="Distance (to the nearest mile)" />
              <InputGroup.Text>miles</InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
        {/* <Row>
          <Col xs={1}>Others:</Col>
          <Col xs={3}>
            <Form.Control />
          </Col>
          <Col>
            <Button variant="secondary">Add</Button>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default Amenities;
