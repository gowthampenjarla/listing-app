import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import {
  Bookmark,
  BookmarkFill,
  CurrencyDollar,
  GeoAlt,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import HouseRating from "./HouseRating";

const HouseCard = ({ house, isBookmark }) => {
  const navigate = useNavigate();

  // const randomNumber = Math.floor(Math.random() * 9);

  return (
    <Card
      style={{ width: "30rem", height: "26rem", borderRadius: "10px" }}
      className="mb-4 shadow"
    >
      <Card.Img
        variant="top"
        src={require(`../assets/images/${house.index}.jpg`)}
        style={{ width: "30rem", height: "15rem" }}
        onClick={() => navigate("/propertydetails", { state: house })}
      />
      {/* <div>
        <ArrowRightCircle />
      </div> */}
      <Row>
        <Col xs={9}>
          <Card.Body>
            <Card.Title className="d-flex justify-content-between">
              <div>
                <CurrencyDollar />
                <span>{house.price}</span>
              </div>

              <div> {house.name}</div>
            </Card.Title>
            <Card.Text className="mt-3">
              <GeoAlt />
              {house.address}
            </Card.Text>
            <Button
              variant="info"
              className="me-4"
              onClick={() => navigate("/propertydetails", { state: house })}
            >
              View Property
            </Button>
            <HouseRating rating={house.rating} />
          </Card.Body>
        </Col>
        <Col xs={3} style={{ borderLeft: "1px solid" }}>
          <div className="d-flex flex-column justify-content-evenly h-100">
            <div>{house.bedRooms} Bed</div>
            <div>{house.bathRooms} Bath</div>
            <div>
              {isBookmark ? <BookmarkFill size={30} /> : <Bookmark size={30} />}
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default HouseCard;
