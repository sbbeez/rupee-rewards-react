import React, { Component } from "react";
import Layout from "antd/lib/layout";
import { connect } from "react-redux";
import { onCollapseClickedAction } from "../../actions";
import { View, TouchableOpacity, Image, Text } from "react-native-web";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import styles from "./style";
import colors from "../../utils/colors";
import Popconfirm from "antd/lib/popconfirm";

const { Header } = Layout;
const menuIcon = require("../../assets/images/side_bar_icon.png");
const logo = require("../../assets/images/logo.png");

class HeadBar extends Component {
  render() {
    //state
    const { collapsed } = this.props;
    //actions
    const { onCollapseClickedAction } = this.props;
    return (
      <Header style={{ background: colors.headerColor, padding: 0 }}>
        <Row>
          <Col span={8}>
            <View style={{ width: 30, height: 30, margin: 20 }}>
              <TouchableOpacity
                onClick={() => onCollapseClickedAction(!collapsed)}
              >
                <Image source={menuIcon} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>
            </View>
          </Col>
          <Col span={8}>
            <View style={[styles.logoView_sider, { margin: 0 }]}>
              <Image source={logo} style={{ width: 50, height: 50 }} />
              <Text style={[styles.logoText_sider, { color: colors.black }]}>
                Rupee Rewards
              </Text>
            </View>
          </Col>
          <Col push={6} span={2}>
            <Popconfirm
              title="Are you sure, you want to log out?"
              okText="Yes"
              cancelText="No"
            >
              <a>
                <Text style={{ color: colors.red }}>Logout</Text>
              </a>
            </Popconfirm>
          </Col>
        </Row>
      </Header>
    );
  }
}

const mapStateToProps = state => {
  const { collapsed } = state.base;
  return { collapsed };
};

export default connect(mapStateToProps, { onCollapseClickedAction })(HeadBar);
