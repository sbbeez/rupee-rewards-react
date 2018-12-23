import React, { Component } from "react";
import { Image, Text, View, ImageBackground } from "react-native";
import Images from "../../utils/Images";

export default props => {
  return (
    <ImageBackground
      style={styles.image}
      source={props.gender === "male" ? Images.male : Images.female}
    >
      <Image
        style={styles.verifiedImage}
        source={props.verified ? Images.green_tick : Images.red_wrong}
      />
    </ImageBackground>
  );
};

const styles = {
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  verifiedImage: {
    width: 30,
    height: 30,
    marginBottom: 30,
    marginLeft: 150
  }
};
