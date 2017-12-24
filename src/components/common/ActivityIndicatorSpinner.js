import React, { Component } from "react";
import { ActivityIndicator } from "react-native-web";

export default props => {
  return (
    <div className="outer App">
      <div className="middle">
        <div className="inner">
          <div className="col-sm-6 col-sm-offset-3">
            <ActivityIndicator size={"large"} />
          </div>
        </div>
      </div>
    </div>
  );
};
