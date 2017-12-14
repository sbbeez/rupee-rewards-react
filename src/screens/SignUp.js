import React, { Component } from "react";
import Input from "antd/lib/input";
import Icon from "antd/lib/icon";
import Button from "antd/lib/button";
import { Link } from "react-router-dom";
const logo = require("../assets/images/logo.png");

class SignUp extends Component {
  render() {
    return (
      <div>
        <h1>hey Sign up here</h1>
        <div>
          <img src={logo} width="100" height="100" />
        </div>
        <div className="col-sm-4 col-sm-offset-4">
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder={"Email"}
          />
          <Input
            type="password"
            prefix={
              <Icon type="desktop" style={{ color: "rgba(0,0,0,.25)" }} />
            }
            placeholder={"password"}
          />
          <Button type="primary" size={"large"}>
            Request for admin
          </Button>
          <h5>
            Request for an admin,<Link to="/">click here</Link>
          </h5>
        </div>
      </div>
    );
  }
}

export default SignUp;
