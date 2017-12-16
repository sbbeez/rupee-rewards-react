import React, { Component } from "react";
import message from "antd/lib/message";
import { View, Image, TouchableOpacity } from "react-native-web";
import BurgerMenu from "react-burger-menu";
import { slide as Menu } from "react-burger-menu";

const sideBarIcon = require("../assets/images/side_bar_icon.png");

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px"
  },
  bmBurgerBars: {
    background: "#373a47"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

class Dashboard extends Component {
  componentWillMount() {
    if (!localStorage.getItem("access_token")) {
      this.props.history.replace("/login");
      message.error("Oops, seems like you haven't logged in.");
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Menu styles={styles} isOpen={this.state.showMenu}>
          <TouchableOpacity onPress={() => this.setState({ showMenu: false })}>
            <Image
              source={sideBarIcon}
              style={{ margin: 20, width: 20, height: 20 }}
            />
          </TouchableOpacity>
        </Menu>
      </View>
    );
  }
}

export default Dashboard;
