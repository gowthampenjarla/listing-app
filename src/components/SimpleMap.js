import React from "react";
import GoogleMap from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      width: "4rem",
      height: "4rem",
      border: "2px solid red",
      transform: "translate(-50%, -50%)",
    }}
  >
    {text}
  </div>
);

export default function SimpleMap(props) {
  return (
    <GoogleMap center={props.center} zoom={props.zoom}>
      <AnyReactComponent
        lat={props.center.lat}
        lng={props.center.lng}
        text={props.name}
        // zoom={props.zoom}
      />
    </GoogleMap>
  );
}
