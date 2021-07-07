import React from "react";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid bg-info">
      <div className="container text-white">
        <h1 className="display-4 text-center mb-3">Employee Directory</h1>
        <p className="lead text-center">
          Employee Directory utilizing the Random User API.
        </p>
      </div>
    </div>
  );
}

export default Header;