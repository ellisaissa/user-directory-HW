import React from "react";

function Search(props) {
  return (
    <nav className="navbar navbar-light bg-light d-flex justify-content-center mt-3 mb-3">
      <form className="form-inline" onSubmit={props.handleFormSubmit}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={props.handleInputChange}
        />
        <button className="btn btn-info my-2 my-md-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
}

export default Search;