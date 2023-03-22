import React from "react";
import { ButtonGroup, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import HouseRating from "./HouseRating";

const FilterModal = (props) => {
  const ratingArr = [1, 2, 3, 4, 5];
  return (
    <div>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={3}>Price</Col>
              <Col xs={4}>
                <Form.Control type="text" placeholder="$ Minimum" />
              </Col>
              <Col xs={1}>-</Col>
              <Col xs={4}>
                <Form.Control type="text" placeholder="$ Maximum" />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col xs={3}>Beds</Col>
              <Col xs={5}>
                <ButtonGroup className="me-2" aria-label="First group">
                  <Button variant="secondary">1</Button>
                  <Button variant="secondary">2</Button>
                  <Button variant="secondary">3</Button>
                  <Button variant="secondary">4</Button>
                  <Button variant="secondary">Any</Button>
                </ButtonGroup>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col xs={3}>Baths</Col>
              <Col xs={5}>
                <ButtonGroup className="me-2" aria-label="First group">
                  <Button variant="secondary">1+</Button>
                  <Button variant="secondary">2+</Button>
                  <Button variant="secondary">3+</Button>
                  <Button variant="secondary">Any</Button>
                </ButtonGroup>
              </Col>
            </Row>
            <Row className="mt-4">
              <h6>Amenities</h6>
              <Col xs={6}>
                <Form.Check
                  inline
                  label="Heating"
                  name="group2"
                  type="checkbox"
                />
              </Col>
              <Col xs={6}>
                <Form.Check
                  inline
                  label="Furnished"
                  name="group2"
                  type="checkbox"
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col xs={6}>
                <Form.Check
                  inline
                  label="Refrigator"
                  name="group2"
                  type="checkbox"
                />
              </Col>
              <Col xs={6}>
                <Form.Check
                  inline
                  label="Parking"
                  name="group2"
                  type="checkbox"
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col xs={6}>
                <Form.Check
                  inline
                  label="Smart locks"
                  name="group2"
                  type="checkbox"
                />
              </Col>
              <Col xs={6}>
                <Form.Check
                  inline
                  label="Air Conditioning"
                  name="group2"
                  type="checkbox"
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col xs={6}>
                <Form.Check
                  inline
                  label="Micorwave"
                  name="group2"
                  type="checkbox"
                />
              </Col>
              <Col xs={6}>
                <Form.Check
                  inline
                  label="Washer/Dryer"
                  name="group2"
                  type="checkbox"
                />
              </Col>
            </Row>{" "}
            <Row className="mt-4">
              <Col xs={6}>
                <Form.Check
                  inline
                  label="Balcony"
                  name="group2"
                  type="checkbox"
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <h6>House Rating</h6>
              {ratingArr.map((el) => {
                return (
                  <Col xs={6}>
                    <Form.Check
                      inline
                      label={<HouseRating rating={el} />}
                      name="group2"
                      type="checkbox"
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Apply</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FilterModal;
