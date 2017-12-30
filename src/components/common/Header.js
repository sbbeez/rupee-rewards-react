import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native-web";
import colors from "../../utils/colors";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Popconfirm from "antd/lib/popconfirm";
import Layout from "antd/lib/layout";
import styles from "../Base/style";
import Icon from "antd/lib/icon";
const { Header } = Layout;

const logo = require("../../assets/images/logo.png");

class CustomHeader extends Component {
  render() {
    //props from parent component
    const { onBack, showBackButton } = this.props;
    return (
      <Header style={{ background: colors.headerColor, padding: 0 }}>
        <Row>
          <Col span={8}>
            <View
              style={{ alignItems: "flex-start", justifyContent: "center" }}
            >
              {showBackButton ? (
                <TouchableOpacity onPress={() => onBack()}>
                  <View style={{ margin: 20, width: 10, height: 10 }}>
                    <Icon type="rollback" />
                  </View>
                </TouchableOpacity>
              ) : (
                <View />
              )}
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
          <Col span={8}>
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
export default CustomHeader;
