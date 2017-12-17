import React from "react";
import { Text } from "react-native-web";
import colors from "../../utils/colors";

export default props => {
  return (
    <Text
      style={[
        props.style,
        { fontSize: 17, fontWeight: "bold", color: colors.black }
      ]}
    >
      {props.text}
    </Text>
  );
};
