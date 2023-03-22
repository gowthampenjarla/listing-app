import React from "react";
import { StarFill } from "react-bootstrap-icons";

const HouseRating = ({ rating }) => {
  const arr = Array.from(Array(rating).keys());
  return (
    <>
      {arr.map((el) => (
        <StarFill style={{ marginLeft: "3px" }} size={30} />
      ))}
    </>
  );
};

export default HouseRating;
