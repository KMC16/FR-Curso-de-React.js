import React from "react";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import logo1 from "../images/platziconf-logo.svg";
import "./BadgeNew.css";
import api from "../API";
import PageLoading from "../components/pageLoading";
class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
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

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-big img-fluid" src={logo1} alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName || "Nombres"}
                lastName={this.state.form.lastName || "Apellidos"}
                twitter={this.state.form.twitter || "Twitter"}
                email={this.state.form.email || "Email@email"}
                jobTitle={this.state.form.jobTitle || "Profesión"}
                avatar="https://s.gravatar.com/avatar/d3a4caa3b2a1882555c69bbd0deaa005?s=80"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                tittle="New Attendant"
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default BadgeNew;
