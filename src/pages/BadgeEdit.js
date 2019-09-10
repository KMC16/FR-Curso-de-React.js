import React from "react";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import logo1 from "../images/platziconf-logo.svg";
import "./BadgeEdit.css";
import api from "../API";
import PageLoading from "../components/pageLoading";
class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      Nombre: "",
      Apellido: "",
      email: "",
      Profesion: "",
      Twitter: ""
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
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
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
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
        <div className="BadgeEdit__hero">
          <img className="img-big img-fluid" src={logo1} alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName || "NOMBRES"}
                lastName={this.state.form.lastName || "Apellidos"}
                twitter={this.state.form.twitter || "Twitter"}
                email={this.state.form.email || "Email@email"}
                jobTitle={this.state.form.jobTitle || "Profesión"}
                avatar="https://s.gravatar.com/avatar/d3a4caa3b2a1882555c69bbd0deaa005?s=80"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                tittle="Edit Attendant"
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
export default BadgeEdit;
