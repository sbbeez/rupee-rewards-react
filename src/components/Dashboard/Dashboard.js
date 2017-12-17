import React, { Component } from "react";
import { View, Text, ActivityIndicator, Image } from "react-native-web";
import { connect } from "react-redux";
import { fetchDashboardDetailsAction } from "../../actions";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import styles from "./styles";

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
  render() {
    const { isLoadingDashboard, dashboardDetails } = this.props;
    return (
      <View>
        {isLoadingDashboard ? (
          <ActivityIndicator size={"large"} />
        ) : (
          <Row>
            {this.renderDataCard("Total Users", "total_users")}
            {this.renderDataCard("Sign Up Today", "total_sign_up_today")}
            {this.renderDataCard("Active Users", "active_users")}
            {this.renderDataCard("Total Ads Watched", "total_ads_watched")}
          </Row>
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
