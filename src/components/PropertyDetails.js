import React from "react";
import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import SimpleMap from "./SimpleMap";

const PropertyDetails = () => {
  const location = useLocation();
  const house = location.state;
  console.log(location);

  const center = {
    lat: house.latitude,
    lng: house.longitude,
  };
  const zoom = 14;

  return (
    <div>
      <h2 className="mb-4">{house.name}</h2>
      <Row>
        <Col xs={4}>
          <div className="mb-3">
            <h5>Price :</h5> <b>${house.price}</b>
          </div>
          <div className="mb-4">
            <h5>Address :</h5> {house.address}
          </div>
          <div className="mb-3">
            {house.bedRooms} Bed | {house.bathRooms} Bath | {house.area} Sq.ft
          </div>
          {/* <div>
            <h5>Location:</h5>
            <div style={{ width: "100%", height: "15rem" }}>
              <SimpleMap center={center} zoom={zoom} name={house.name} />
            </div>
          </div> */}
        </Col>

        <Col xs={3}>
          <div className="mb-3">
            <h5>Universities:</h5>
            {house.nearByUniv} mi from University of Michigan-flint
          </div>
          <div className="mb-3">
            <h5>Airport:</h5>
            {house.nearByAirport} mi from Bishop International
          </div>
          <div className="mb-3">
            <h5>Bus Transit service:</h5>
            {house.nearByUniv} mi from MTA transit center
          </div>
          <div></div>
        </Col>
        <Col xs={5}>
          <img
            src={require(`../assets/images/${house.index}.jpg`)}
            style={{ width: "30rem", height: "13rem" }}
            alt={house.name}
          />
        </Col>
        <Col xs={6}>
          <div>
            <h5>Location:</h5>
            <div style={{ width: "100%", height: "20rem" }}>
              <SimpleMap center={center} zoom={zoom} name={house.name} />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={4}>
          <h5>Details:</h5>
          <div className="mt-3">
            <b>Roommates Preferred:</b> Vegetarian, Non-Alcoholic, No Smoking,
            Shared Cleaning, Shared Cooking.
          </div>

          <div className="mt-3">
            <b>Amenities inclided:</b> Internet, Laundry, Parking
          </div>

          <div className="mt-3">
            <b>Bills included in rent:</b> Water.
          </div>

          <div className="mt-3">
            <b>Security Cameras present:</b> Yes
          </div>

          <div className="mt-3">
            <b>Pet policy:</b> Dogs allowed, Cats Not allowed
          </div>

          <div className="mt-3">
            <b>Lease term:</b> 12 Months
          </div>

          <div className="mt-3 mb-5">
            <b>Property availability:</b> from 27-Mar-2023
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PropertyDetails;
