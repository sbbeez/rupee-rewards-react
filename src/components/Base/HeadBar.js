import React, { Component } from "react";
import Layout from "antd/lib/layout";
import Icon from "antd/lib/icon";
import { connect } from "react-redux";
import { onCollapseClickedAction } from "../../actions";
import { View, TouchableOpacity, Image } from "react-native-web";

const { Header } = Layout;
const menuIcon = require("../../assets/images/side_bar_icon.png");

class HeadBar extends Component {
  render() {
    //state
    const { collapsed } = this.props;
    //actions
    const { onCollapseClickedAction } = this.props;
    return (
      <Header style={{ background: "#fff", padding: 0 }}>
        <View style={{ width: 30, height: 30, margin: 20 }}>
          <TouchableOpacity onClick={() => onCollapseClickedAction(!collapsed)}>
            <Image source={menuIcon} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>
      </Header>
    );
  }
}

const mapStateToProps = state => {
  const { collapsed } = state.base;
  return { collapsed };
};

export default connect(mapStateToProps, { onCollapseClickedAction })(HeadBar);
