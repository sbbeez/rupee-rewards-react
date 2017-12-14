import React, { Component } from "react";
import { connect } from "react-redux";
import {} from "../actions";
import Input from "antd/lib/input";
import Icon from "antd/lib/icon";
import Button from "antd/lib/button";
import { Link } from "react-router-dom";
import { onLoginAction } from "../actions";

const logo = require("../assets/images/logo.png");

class Login extends Component {
  renderInput(icon, type, placeholder) {
    return (
      <Input
        type={type}
        prefix={<Icon type={icon} style={{ color: "rgba(0,0,0,.25)" }} />}
        placeholder={placeholder}
      />
    );
  }
  render() {
    return (
      <div>
        <h1>hey login here</h1>
        <div>
          <img src={logo} width="100" height="100" />
        </div>
        <div className="col-sm-4 col-sm-offset-4">
          {this.renderInput("user", "text", "Admin Email")}
          {this.renderInput("desktop", "password", "password")}
          <Button type="primary" size={"large"}>
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
export default connect(null, { onLoginAction })(Login);
