import React from "react";
import { Col, Row } from "react-bootstrap";

import houses from "../assets/data/propertiesList.json";
import HouseCard from "./HouseCard";

const HouseList = () => {
  return (
    <Row xs={1} md={2}>
      {houses.map((house) => (
        <Col key={house._id}>
          <HouseCard house={house} />
        </Col>
      ))}
    </Row>
  );
};

export default HouseList;
