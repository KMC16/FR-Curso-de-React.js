import React from "react";
import "./pageLoading.css";
import Loader from "./Loader";

function pageLoading() {
  return (
    <div className="cargando">
      <Loader />
    </div>
  );
}

export default pageLoading;
