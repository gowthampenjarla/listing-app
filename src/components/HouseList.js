import React from "react";
import { Col, Row } from "react-bootstrap";

import houses from "../assets/data/propertiesList.json";
import HouseCard from "./HouseCard";

const HouseList = ({ isBookmark, type }) => {
  console.log(!type);
  const filteredHouses = type
    ? houses.filter((el) => el.propertyType === type)
    : houses;
  console.log(filteredHouses);
  return (
    <Row xs={1} md={2}>
      {filteredHouses.map((house) => (
        <Col key={house._id}>
          <HouseCard house={house} isBookmark={isBookmark} />
        </Col>
      ))}
    </Row>
  );
};

export default HouseList;
