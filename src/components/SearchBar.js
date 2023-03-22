import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Filter, Search } from "react-bootstrap-icons";
import FilterModal from "./FilterModal";

const SearchBar = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  return (
    <div className="d-flex justify-content-around">
      <InputGroup className="mb-3" style={{ width: "50%" }}>
        <Form.Control
          placeholder="Flint, Michigan, 48503"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">
          <Search />
        </InputGroup.Text>
      </InputGroup>
      <div>
        <Button variant="secondary" onClick={() => setisModalOpen(true)}>
          Filters
          <Filter />
        </Button>
        <FilterModal show={isModalOpen} onHide={() => setisModalOpen(false)} />
      </div>
    </div>
  );
};

export default SearchBar;
