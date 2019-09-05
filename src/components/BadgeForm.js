import React from "react";

class BadgeForm extends React.Component {
  //   state = {};
  handleChange = e => {
    // console.log({
    //   name: e.target.name,
    //   value: e.target.value
    // });
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = e => {
    console.log("Button was Clicked");
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Form was Submited");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="from-group">
            <label>Nombres</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="Nombre"
              value={this.props.formValues.Nombre}
            />
          </div>

          <div className="from-group">
            <label>Apellido</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="Apellido"
              value={this.props.formValues.Apellido}
            />
          </div>

          <div className="from-group">
            <label>email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="from-group">
            <label>Profesión</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="Profesion"
              value={this.props.formValues.Profesion}
            />
          </div>

          <div className="from-group">
            <label>twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
