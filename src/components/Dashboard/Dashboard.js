import React, { Component } from "react";
import { View, Text, ActivityIndicator, Image } from "react-native-web";
import { connect } from "react-redux";
import { fetchDashboardDetailsAction } from "../../actions";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import styles from "./styles";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import colors from "../../utils/colors";
import { DarkText } from "../common";

const activeUsersIcon = require("../../assets/images/active_users_icon.png");
const dataCardImages = {
  total_users: require("../../assets/images/total_users_icon.png"),
  total_sign_up_today: require("../../assets/images/sign_up_icon.png"),
  active_users: require("../../assets/images/active_users_icon.png"),
  total_ads_watched: require("../../assets/images/ads_watched_icon.png")
};

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchDashboardDetailsAction();
  }
  renderDataCard(cardHeading, image) {
    const { dashboardDetails } = this.props;
    return (
      <Col xs={24} sm={12} lg={6}>
        <View style={styles.cardDataView}>
          <Image source={dataCardImages[image]} style={styles.cardImage} />
          <View style={styles.textView}>
            <Text style={styles.valueText}>{dashboardDetails[image]}</Text>
            <Text style={styles.cardHeadingText}>{cardHeading}</Text>
          </View>
        </View>
      </Col>
    );
  }
  renderChart(data, xaxisData, datakey) {
    const { dashboardDetails } = this.props;
    return (
      <AreaChart
        width={600}
        height={300}
        data={dashboardDetails[data]}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis dataKey={xaxisData} />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey={datakey}
          stroke={colors.themeDarkBlueOne}
          fill={colors.themeBlueOne}
        />
      </AreaChart>
    );
  }
  render() {
    const { isLoadingDashboard, dashboardDetails } = this.props;
    return (
      <View>
        {isLoadingDashboard ? (
          <ActivityIndicator size={"large"} />
        ) : (
          <div>
            <h1>Dashboard</h1>
            <Row>
              {this.renderDataCard("Total Users", "total_users")}
              {this.renderDataCard("Sign Up Today", "total_sign_up_today")}
              {this.renderDataCard("Active Users", "active_users")}
              {this.renderDataCard("Total Ads Watched", "total_ads_watched")}
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={12}>
                {this.renderChart("sign_up_last_week", "day", "count")}
                <DarkText text={"Metrics for sign ups Last week"} />
              </Col>
              <Col xs={24} sm={12} md={24} lg={12}>
                {this.renderChart("ads_watched_last_week", "day", "count")}
                <DarkText text={"Total Ads Watched last week metrics"} />
              </Col>
            </Row>
          </div>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { isLoadingDashboard, dashboardDetails } = state.dashboard;
  return { isLoadingDashboard, dashboardDetails };
};

export default connect(mapStateToProps, { fetchDashboardDetailsAction })(
  Dashboard
);
