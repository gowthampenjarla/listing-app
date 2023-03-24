import React from "react";
import { Col, Row } from "react-bootstrap";

import houses from "../assets/data/propertiesList.json";
import HouseCard from "./HouseCard";

const HouseList = ({ isBookmark }) => {
  return (
    <Row xs={1} md={2}>
      {houses.map((house) => (
        <Col key={house._id}>
          <HouseCard house={house} isBookmark={isBookmark} />
        </Col>
      ))}
    </Row>
  );
};

export default HouseList;
