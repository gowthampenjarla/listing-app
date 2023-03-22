import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Step, Stepper } from "react-form-stepper";
import Amenities from "./Amenities";
import ContactInfo from "./ContactInfo";
import "./PlaceListing.css";
import Preview from "./Preview";
import PropertyInfo from "./PropertyInfo";
import Rent from "./Rent";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router";
import { LISTING_MESSAGE } from "../../helpers/constants";

const PlaceListing = () => {
  const navigate = useNavigate();
  const [stepNumber, setstepNumber] = useState(0);

  const SelectedComponentObj = {
    0: <PropertyInfo />,
    1: <Rent />,
    2: <Amenities />,
    3: <ContactInfo />,
    4: <Preview />,
  };

  const handleNext = () => {
    if (stepNumber < 4) {
      setstepNumber((prevStep) => prevStep + 1);
    } else {
      navigate("/message", {
        state: LISTING_MESSAGE,
      });
    }
  };

  return (
    <div>
      <Stepper activeStep={stepNumber}>
        <Step label="Property Info" />
        <Step label="Rent & Lease" />
        <Step label="Amenities" />
        <Step label="Contact Info" />
        <Step label="Preview" />
      </Stepper>

      <div className={stepNumber < 4 && "containerHeight"}>
        {SelectedComponentObj[stepNumber]}
      </div>

      <div className="footer">
        <Button
          variant="primary"
          disabled={stepNumber === 0}
          onClick={() => setstepNumber((prevStep) => prevStep - 1)}
        >
          <ArrowLeft />
          <span className="m-2">Previous</span>
        </Button>
        <Button variant="primary" onClick={handleNext}>
          <span className="m-2">
            {stepNumber < 4 ? "Save and Proceed" : "Submit"}
          </span>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default PlaceListing;
