import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Images from "../../../utils/Images";

//antd imports
import Col from "antd/lib/col";

export default props => {
  return (
    <View>
      <View style={styles.cardDataView}>
        <Image source={Images[props.image]} style={styles.cardImage} />
        <View style={styles.textView}>
          <Text style={styles.valueText}>{props.value}</Text>
          <Text style={styles.cardHeadingText}>{props.title}</Text>
        </View>
      </View>
    </View>
  );
};
