import React, { Component } from "react";
import Layout from "antd/lib/layout";
import Menu from "antd/lib/menu";
import Icon from "antd/lib/icon";
import { connect } from "react-redux";
import { View, Image, Text } from "react-native-web";
import styles from "./style";

const { Sider } = Layout;
const logo = require("../../assets/images/logo.png");
const options = [
  { menu: "Dashboard", icon_type: "dashboard" },
  { menu: "Analytics", icon_type: "compass" },
  { menu: "Payments", icon_type: "pay-circle" },
  { menu: "Payments Analytics", icon_type: "area-chart" },
  { menu: "Admin Requests", icon_type: "usergroup-add" },
  { menu: "Settings", icon_type: "setting" }
];

class SideBar extends Component {
  renderOptions() {
    return options.map((option, key) => {
      return (
        <Menu.Item key={key}>
          <View style={styles.optionsView_sider}>
            <Icon type={option.icon_type} />
            <span>{option.menu}</span>
          </View>
        </Menu.Item>
      );
    });
  }
  render() {
    //state
    const { collapsed } = this.props;
    return (
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <View style={styles.logoView_sider}>
          <Image source={logo} style={{ width: 30, height: 30 }} />
          {collapsed ? (
            <View />
          ) : (
            <Text style={styles.logoText_sider}>Rupee Rewards</Text>
          )}
        </View>
        <Menu
          theme="dark"
          mode="inline"
          style={{ alignItems: "flex-start" }}
          defaultSelectedKeys={["0"]}
        >
          {this.renderOptions()}
        </Menu>
      </Sider>
    );
  }
}

const mapStateToProps = state => {
  const { collapsed } = state.base;
  return { collapsed };
};

export default connect(mapStateToProps, {})(SideBar);
