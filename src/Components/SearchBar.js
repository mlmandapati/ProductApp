import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/products?search=${searchText}`);
  };

  return (
    <Form
      className="d-flex"
      onSubmit={handleSubmit}
    >
      <Form.Control
        type="search"
        placeholder="Search..."
        value={searchText}
        className="search_bar"
        aria-label="Search"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button
        variant="outline-success"
        type="submit"
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
