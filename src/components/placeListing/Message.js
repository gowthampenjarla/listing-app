import React from "react";
import { useLocation } from "react-router";
import "./PlaceListing.css";

const Message = () => {
  const location = useLocation();
  return (
    <div className="message">
      <h2>{location.state}</h2>
    </div>
  );
};

export default Message;
