import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import RoomMateCard from "./RoomMateCard";
import roomMates from "../assets/data/roomMates.json";
import "./style/Dashboard.scss";

const RoomMateFinder = () => {
  const [isFindEnabled, setisFindEnabled] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <div>
      <h4>Looking for a roommate</h4>
      <Row>
        <Col xs={7}>
          <Row className="mt-4">
            <Col xs={3}>
              <b>Room Type</b>
            </Col>
            <Col xs={5}>
              <Form>
                <Form.Check
                  inline
                  label="Single"
                  name="group1"
                  type="radio"
                  className="ml-3"
                />
                <Form.Check inline label="Shared" name="group1" type="radio" />
              </Form>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={3}>
              <b>Monthly Budget</b>
            </Col>
            <Col xs={5}>
              <Form.Range
                min={0}
                max={2000}
                step={100}
                value={sliderValue}
                onChange={(e) => setSliderValue(e.target.value)}
              />
              <div className="d-flex justify-content-between">
                <div>$0</div>
                {sliderValue}
                <div>$2000</div>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={3}>
              <b>Gender</b>
            </Col>
            <Col xs={2}>
              <Form.Select
                aria-label="Default select example"
                style={{ width: "10rem" }}
              >
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Others</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <Row>
                <Col xs={6}>
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
                <Col xs={6}>
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
                <Col>
                  <b>Period of movement</b>
                </Col>
                <Col>
                  <Form>
                    <Form.Check
                      inline
                      label="15 days"
                      name="group2"
                      type="radio"
                    />
                    <Form.Check
                      inline
                      label="1 month"
                      name="group2"
                      type="radio"
                    />
                    <Form.Check
                      inline
                      label="Custom"
                      name="group2"
                      type="radio"
                    />
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <Row>
                <Col xs={6}>
                  <b>Food Preferences</b>
                </Col>
                <Col xs={6}>
                  <Form>
                    <Form.Check
                      inline
                      label="Vegan"
                      name="group2"
                      type="radio"
                    />
                    <Form.Check inline label="Any" name="group2" type="radio" />
                  </Form>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xs={6}>
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
                <Col>
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
            <Col xs={3}>
              <b>Shared Cleaning</b>
            </Col>
            <Col xs={3}>
              <Form>
                <Form.Check inline label="Yes" name="group2" type="radio" />
                <Form.Check inline label="No" name="group2" type="radio" />
              </Form>
            </Col>
          </Row>
          <div className="findButton mt-4">
            <Button onClick={() => setisFindEnabled(true)}>
              Find <ArrowRight />
            </Button>
          </div>
        </Col>
        {isFindEnabled && (
          <Col xs={5} className="roommateSearch">
            <h4 className="mt-3">Search results</h4>
            {roomMates.map((rm) => (
              <RoomMateCard key={rm.guid} roomMate={rm} />
            ))}
          </Col>
        )}
      </Row>
    </div>
  );
};

export default RoomMateFinder;
