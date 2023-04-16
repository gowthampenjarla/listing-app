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
  const bedsArr = ["1", "2", "3", "4", "Any"];
  const baths = ["1+", "2+", "3+", "Any"];
  const amenitiies = [
    "Heating",
    "Furnished",
    "Refrigator",
    "Parking",
    "Smart locks",
    "Air Conditioning",
    "Micorwave",
    "Washer/Dryer",
    "Balcony",
  ];

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
                <ButtonGroup className="me-2" aria-label="First group" data>
                  {bedsArr.map((bed) => (
                    <>
                      <input
                        type="checkbox"
                        class="btn-check"
                        id={`btn-check-${bed}`}
                        autocomplete="off"
                      />
                      <label class="btn btn-secondary" for={`btn-check-${bed}`}>
                        {bed}
                      </label>
                    </>
                  ))}
                </ButtonGroup>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col xs={3}>Baths</Col>
              <Col xs={5}>
                <ButtonGroup className="me-2" aria-label="First group">
                  {baths.map((bath) => (
                    <>
                      <input
                        type="checkbox"
                        class="btn-check"
                        id={`btn-check-bath-${bath}`}
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-secondary"
                        for={`btn-check-bath-${bath}`}
                      >
                        {bath}
                      </label>
                    </>
                  ))}
                </ButtonGroup>
              </Col>
            </Row>
            <Row className="mt-4">
              <h6>Amenities</h6>
              {amenitiies.map((el) => (
                <Col xs={6} className="mt-3">
                  <Form.Check inline label={el} name="group2" type="checkbox" />
                </Col>
              ))}
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
