import React from "react";
import Navbar from "../components/Navbar";
import "./Badges.css";
import conflogo from "../images/badge-header.svg";

class Badges extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={conflogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Badges;
