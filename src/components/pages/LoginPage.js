import React, { Component } from "react";
import LoginForm from "../forms/LoginForm";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { login, mapDispatchToProps } from "../../actions/auth";
class LoginPage extends Component {
  submit = credentials => {
    this.props.login(credentials).then(() => this.props.history.push("/"));
  };

  render() {
    return (
      <div>
        <h1>LoginPage</h1>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired
  }).isrequired,
  login: propTypes.func.isRequired
};

export default connect(
  null,
  { login }
)(LoginPage);
