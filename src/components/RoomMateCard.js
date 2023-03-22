import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Bookmark } from "react-bootstrap-icons";

const RoomMateCard = ({ roomMate }) => {
  const gender = roomMate.gender === "male" ? "male" : "female";
  return (
    <div>
      <Card style={{ width: "95%", marginBottom: "2rem" }} className="shadow">
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Row>
            <Col xs={5}>
              <img
                src={require(`../assets/images/${gender}.jpg`)}
                style={{ width: "10rem" }}
                alt={gender}
              ></img>
            </Col>
            <Col xs={7}>
              <Card.Title>
                {roomMate.firstName} {roomMate.surName}
              </Card.Title>
              <Card.Text>
                <div>
                  <b>Age: </b> {roomMate.age}
                </div>
                <div>
                  <b>Range:</b> ${roomMate.range}
                </div>
                <div>
                  <b>Move in by:</b> {roomMate.movein}
                </div>
                <div className="mt-3 d-flex justify-content-between">
                  <Button variant="secondary">Contact</Button>
                  <div>
                    <Bookmark className="ml-4" />
                  </div>
                </div>
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RoomMateCard;