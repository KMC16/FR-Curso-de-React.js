import React from "react";
import "./PageError.css";
import { Link } from "react-router-dom";

function PageError(props) {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
        <Link to="../pages/Home">Homepage</Link>
      </div>
    </div>
  );
}

export default PageError;
