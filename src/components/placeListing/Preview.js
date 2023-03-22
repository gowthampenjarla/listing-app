import React from "react";
import {
  Col,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";

const Preview = () => {
  const col1 = 2;
  const col2 = 3;
  const col3 = 2;
  const col4 = 3;
  return (
    <div>
      <div className="display-6 mb-4">Property Info</div>
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
                  defaultChecked
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
                defaultValue="328 N Grand Traverse St, Flint, MI 48503, United States"
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
            <Form.Control type="number" defaultValue={25} />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={col1}>Laundry</Col>
          <Col xs={col2}>
            <Form>
              <Form.Check
                inline
                label="Yes"
                name="group2"
                type="radio"
                defaultChecked
              />
              <Form.Check inline label="No" name="group2" type="radio" />
            </Form>
          </Col>
          <Col xs={col3}>Bed rooms:</Col>
          <Col xs={col4}>
            <Form.Control type="number" defaultValue={3} />
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          <Col xs={col1}>Parking</Col>
          <Col xs={col2}>
            <Form>
              <Form.Check
                inline
                label="Yes"
                name="group2"
                type="radio"
                defaultChecked
              />
              <Form.Check inline label="No" name="group2" type="radio" />
            </Form>
          </Col>
          <Col xs={col3}>Bath rooms:</Col>
          <Col xs={col4}>
            <Form.Control type="number" defaultValue={2} />
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
            <Form.Control type="number" defaultValue={650} />
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

        <div className="display-6 mb-4">Rent</div>
        <Row>
          <Col xs={col1}>Amount of Rent:</Col>
          <Col xs={col2}>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                aria-label="Amount (to the nearest dollar)"
                defaultValue={2000}
              />
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={col1}>Security Deposit:</Col>
          <Col xs={col2}>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                aria-label="Amount (to the nearest dollar)"
                defaultValue={700}
              />
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
                defaultChecked
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
                defaultChecked
              />
            </Form>
          </Col>
        </Row>

        <div className="display-6 mb-4">Contact Info</div>
        <Row className="mb-4">
          <Col xs={col1}>Name *</Col>
          <Col xs={col2}>
            <Form.Control type="text" defaultValue="Mark" />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col xs={col1}>Email *</Col>
          <Col xs={col2}>
            <Form.Control type="email" defaultValue="Mark@gmail.com" />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col xs={col1}>Phone Number *</Col>
          <Col xs={col2}>
            <Form.Control type="text" defaultValue="+1 832-473-098" />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col xs={col1}>Tour Availability</Col>
          <Col xs={col2}>
            <Form.Control as="textarea" defaultValue="Mon - Fri  10AM - 5 PM" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Check
              className="mb-4"
              label="I here by acknowledge all the above mentioned changes are correct"
              name="group3"
              type="checkbox"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Preview;
