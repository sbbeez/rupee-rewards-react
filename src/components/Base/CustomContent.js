import React, { Component } from "react";
import Layout from "antd/lib/layout";
import { connect } from "react-redux";
import Dashboard from "../Dashboard/Dashboard";
import Analytics from "../Analytics/Analytics";
import Settings from "../Settings/Settings";
import Payments from "../Payments/Payments";
import AdminRequests from "../AdminRequests/AdminRequests";
import PaymentsAnalytics from "../PaymentsAnalytics/PaymentsAnalytics";

const { Content } = Layout;
class CustomContent extends Component {
  renderContent() {
    switch (this.props.content) {
      case "Dashboard":
        return <Dashboard navigation={this.props.navigation} />;
      case "Analytics":
        return <Analytics />;
      case "Settings":
        return <Settings />;
      case "Payments":
        return <Payments />;
      case "Payments Analytics":
        return <PaymentsAnalytics />;
      case "Admin Requests":
        return <AdminRequests />;
      default:
        return <Dashboard />;
    }
  }
  render() {
    return <Content>{this.renderContent()}</Content>;
  }
}

const mapStateToProps = state => {
  const { content } = state.base;
  return { content };
};

export default connect(mapStateToProps, {})(CustomContent);
