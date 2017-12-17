import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native-web";
import { connect } from "react-redux";
import { fetchDashboardDetailsAction } from "../../actions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchDashboardDetailsAction();
  }
  render() {
    const { isLoadingDashboard, dashboardDetails } = this.props;
    return (
      <View>
        {isLoadingDashboard ? (
          <ActivityIndicator size={"large"} />
        ) : (
          <Text>{dashboardDetails.total_users}</Text>
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
