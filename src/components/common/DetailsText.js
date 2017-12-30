import React, { Component } from "react";
import { View, Text } from "react-native-web";
import styles from "./styles";
import * as copy from "copy-to-clipboard";

//ant design imports
import Tooltip from "antd/lib/tooltip";

export default class DetailsText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
  }
  onFieldClick(text) {
    copy(text);
    this.setState({ copied: true });
    setTimeout(() => this.setState({ copied: false }), 1200);
  }
  render() {
    //props from parent
    const { field, text } = this.props;
    return (
      <Tooltip title={`${field} copied.`} visible={this.state.copied}>
        <View style={styles.detailsTextView}>
          <Text style={styles.fieldText}>{field}</Text>
          <Text
            style={styles.text}
            numberOfLines={5}
            onPress={() => this.onFieldClick(text)}
          >
            {text}
          </Text>
        </View>
      </Tooltip>
    );
  }
}
