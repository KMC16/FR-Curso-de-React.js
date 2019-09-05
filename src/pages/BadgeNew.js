import React from "react";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

import logo1 from "../images/badge-header.svg";
import "./BadgeNew.css";
class BadgeNew extends React.Component {
  state = {
    form: {
      Nombre: "",
      Apellido: "",
      email: "",
      Profesion: "",
      Twitter: ""
    }
  };

  handleChange = e => {
    // const nextForm = this.state.form;
    // nextForm[e.target.name] = e.target.value;

    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={logo1} alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.Nombre}
                lastName={this.state.form.Apellido}
                twitter={this.state.form.Twitter}
                jobTittle={this.state.form.Profesion}
                avatar="https://s.gravatar.com/avatar/d3a4caa3b2a1882555c69bbd0deaa005?s=80"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BadgeNew;
