import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Bookmark, Telephone, Envelope } from "react-bootstrap-icons";

const RoomMateCard = ({ roomMate }) => {
  const gender = roomMate.gender === "male" ? "male" : "female";
  return (
    <div>
      <Card
        style={{ width: "95%", marginBottom: "2rem", borderRadius: "10px" }}
        className="shadow"
      >
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
                  <Telephone size={25} title="Phone" />
                  <Envelope size={25} title="E-mail" />
                  <Bookmark className="ml-4" size={25} />
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
