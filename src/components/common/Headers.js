import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native-web";
import colors from "../../utils/colors";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Layout from "antd/lib/layout";

const styles = {
  headerView: {
    flex: 1,
    backgroundColor: colors.headerColor,
    height: 80,
    justifyContent: "center"
  }
};

const logo = require("../../assets/images/logo.png");

class Header extends Component {
  render() {
    return (
      <View style={styles.headerView}>
        <Row align="middle">
          <Col span={8} offset={8}>
            <Row type="flex" justify="center">
              <Col>
                <Image style={{ width: 50, height: 50 }} source={logo} />
              </Col>
              <Col>
                <h4>Rupee Rewards</h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </View>
    );
  }
}
export default Header;
