import React, { Component } from "react";
import { connect } from "react-redux";
import {} from "../actions";
import Input from "antd/lib/input";
import Icon from "antd/lib/icon";
import Button from "antd/lib/button";
import { Link } from "react-router-dom";
import { onLoginAction, onLoginFieldsChangeAction } from "../actions";

const logo = require("../assets/images/logo.png");

class Login extends Component {
  componentDidMount() {
    if (localStorage.getItem("access_token")) {
      this.props.history.replace("/dashboard");
    }
  }

  renderInput(icon, type, placeholder, onChange) {
    return (
      <Input
        type={type}
        prefix={<Icon type={icon} style={{ color: "rgba(0,0,0,.25)" }} />}
        placeholder={placeholder}
        onChange={event => onChange(event.target.value)}
      />
    );
  }
  render() {
    //state
    const { email, password } = this.props;
    //actions
    const { onLoginFieldsChangeAction, onLoginAction } = this.props;
    //navigation
    const { history } = this.props;
    return (
      <div>
        <h1>hey login here</h1>
        <div>
          <img src={logo} width="100" height="100" />
        </div>
        <div className="col-sm-4 col-sm-offset-4">
          {this.renderInput("user", "text", "Admin Email", value =>
            onLoginFieldsChangeAction({ prop: "email", value })
          )}
          {this.renderInput("desktop", "password", "password", value =>
            onLoginFieldsChangeAction({ prop: "password", value })
          )}
          <Button
            type="primary"
            size={"large"}
            onClick={() => onLoginAction(email, password, history)}
          >
            login
          </Button>
          <h5>
            Request for an admin,<Link to="/signup">click here</Link>
          </h5>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { email, password } = state.login;
  console.log(email);
  return { email, password };
};

export default connect(mapStateToProps, {
  onLoginAction,
  onLoginFieldsChangeAction
})(Login);
