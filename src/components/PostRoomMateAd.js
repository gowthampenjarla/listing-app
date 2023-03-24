import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router";
import { POST_ROOMMATE_MESSAGE } from "../helpers/constants";

const PostRoomMateAd = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container fluid>
        <Row className="mt-4">
          <Col xs={2}>First Name</Col>
          <Col xs={3}>
            <Form.Control type="text" />
          </Col>
          <Col xs={2}></Col>
          <Col xs={2}>Email Address</Col>
          <Col xs={3}>
            <Form.Control type="email" />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={2}>Last Name</Col>
          <Col xs={3}>
            <Form.Control type="text" />
          </Col>
          <Col xs={2}></Col>
          <Col xs={2}>Phone Number</Col>
          <Col xs={3}>
            <Form.Control type="text" />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={2}>Price Range</Col>
          <Col xs={3}>
            <Form.Control type="text" />
          </Col>
          <Col xs={2}></Col>
          <Col xs={2}>Move-in Date</Col>
          <Col xs={3}>
            <Form.Control type="date" />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={2}>
            <b>Gender</b>
          </Col>
          <Col xs={4}>
            <Form>
              <Form.Check inline label="Male" name="group2" type="radio" />
              <Form.Check inline label="Female" name="group2" type="radio" />
              <Form.Check inline label="Any" name="group2" type="radio" />
            </Form>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Row>
              <Col xs={4}>
                <b>Smoking</b>
              </Col>
              <Col xs={6}>
                <Form>
                  <Form.Check inline label="Yes" name="group2" type="radio" />
                  <Form.Check inline label="No" name="group2" type="radio" />
                </Form>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col xs={4}>
                <b>Alcohol</b>
              </Col>
              <Col xs={6}>
                <Form>
                  <Form.Check inline label="Yes" name="group2" type="radio" />
                  <Form.Check inline label="No" name="group2" type="radio" />
                </Form>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs={2}></Col>
              <Col xs={4}>
                <b>Period of movement</b>
              </Col>
              <Col>
                <Form>
                  <Form.Check label="15 days" name="group2" type="radio" />
                  <Form.Check label="1 month" name="group2" type="radio" />
                  <Form.Check label="Custom" name="group2" type="radio" />
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Row>
              <Col xs={4}>
                <b>Food Preferences</b>
              </Col>
              <Col xs={6}>
                <Form>
                  <Form.Check inline label="Vegan" name="group2" type="radio" />
                  <Form.Check inline label="Any" name="group2" type="radio" />
                </Form>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col xs={4}>
                <b>Shared Cooking</b>
              </Col>
              <Col xs={6}>
                <Form>
                  <Form.Check inline label="Yes" name="group2" type="radio" />
                  <Form.Check inline label="No" name="group2" type="radio" />
                </Form>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs={2}></Col>
              <Col xs={4}>
                <b>Lease</b>
              </Col>
              <Col>
                <Form>
                  <Form.Check label="Short" name="group2" type="radio" />
                  <Form.Check label="Long" name="group2" type="radio" />
                  <Form.Check label="Custom" name="group2" type="radio" />
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={2}>
            <b>Shared Cleaning</b>
          </Col>
          <Col xs={3}>
            <Form>
              <Form.Check inline label="Yes" name="group2" type="radio" />
              <Form.Check inline label="No" name="group2" type="radio" />
            </Form>
          </Col>
        </Row>{" "}
        <Row className="mt-4">
          <Col xs={2}>
            <b>Description</b>
          </Col>
          <Col xs={3}>
            <Form.Control as="textarea" />
          </Col>
        </Row>
        <div className="findButton mt-4 mb-4">
          <Button
            onClick={() =>
              navigate("/message", { state: POST_ROOMMATE_MESSAGE })
            }
          >
            Submit <ArrowRight />
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default PostRoomMateAd;
