import React, { Component } from "react";
import message from "antd/lib/message";
import Layout from "antd/lib/layout";
import { SideBar, HeadBar, CustomContent } from "../components/Base";

class Base extends Component {
  componentWillMount() {
    if (!localStorage.getItem("access_token")) {
      this.props.history.replace("/login");
      message.error("Oops, seems like you haven't logged in.");
    }
  }
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar />
        <Layout>
          <HeadBar />
          <CustomContent navigation={this.props} />
        </Layout>
      </Layout>
    );
  }
}

export default Base;
