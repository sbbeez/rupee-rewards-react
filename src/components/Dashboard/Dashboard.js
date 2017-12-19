import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native-web";
import { connect } from "react-redux";
import { fetchDashboardDetailsAction } from "../../actions";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import List from "antd/lib/list";
import styles from "./styles";
import TooltipAntd from "antd/lib/tooltip";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from "recharts";
import colors from "../../utils/colors";
import { DarkText } from "../common";

const dataCardImages = {
  total_users: require("../../assets/images/total_users_icon.png"),
  total_sign_up_today: require("../../assets/images/sign_up_icon.png"),
  active_users: require("../../assets/images/active_users_icon.png"),
  total_ads_watched: require("../../assets/images/ads_watched_icon.png")
};
const logoIcon = require("../../assets/images/logo.png");

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
  renderAreaChart(data, xaxisData, datakey) {
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

  renderBarChart(male, female) {
    const COLORS = [colors.themeBlueOne, colors.themeDarkBlueOne];
    const data = [
      { name: "male", value: male },
      { name: "female", value: female }
    ];
    return (
      <PieChart width={600} height={210}>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          label
          isAnimationActive={false}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
  renderGridView(data) {
    return (
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={data}
        renderItem={datum => (
          <List.Item>
            <TooltipAntd title={datum.name} placement="right">
              <TouchableOpacity
                style={styles.recentSignUpImage}
                onPress={() =>
                  this.props.navigation.history.push(`/user/${datum.id}`)}
              >
                <Image
                  source={{ uri: datum.pro_pic_url }}
                  style={styles.recentSignUpImage}
                  defaultSource={logoIcon}
                />
              </TouchableOpacity>
            </TooltipAntd>
          </List.Item>
        )}
      />
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
                {this.renderAreaChart("sign_up_last_week", "day", "count")}
                <DarkText text={"Metrics for sign ups Last week"} />
              </Col>
              <Col xs={24} sm={12} md={24} lg={12}>
                {this.renderAreaChart("ads_watched_last_week", "day", "count")}
                <DarkText text={"Total Ads Watched last week metrics"} />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={12}>
                {this.renderAreaChart("active_users_last_week", "day", "count")}
                <DarkText text={"Metrics for Active users last week"} />
              </Col>
              <Col xs={24} sm={12} md={24} lg={12}>
                {this.renderBarChart(
                  dashboardDetails.gender_metrics.male,
                  dashboardDetails.gender_metrics.female
                )}
                <View style={styles.legendView}>
                  <View style={styles.legendBox} />
                  <DarkText text={"male"} style={{ margin: 30 }} />
                </View>
                <DarkText text={"Gender Analytics"} />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={12}>
                <View style={styles.profileViews}>
                  <ScrollView contentContainerStyle={{ padding: 30 }}>
                    {this.renderGridView(dashboardDetails.recent_sign_ups)}
                  </ScrollView>
                </View>
                <DarkText text={"Recent Sign ups"} />
              </Col>
              <Col xs={24} sm={24} md={24} lg={12}>
                <View style={styles.profileViews}>
                  <ScrollView contentContainerStyle={{ padding: 30 }}>
                    {this.renderGridView(dashboardDetails.active_users_details)}
                  </ScrollView>
                </View>
                <DarkText text={"Recent Active Users"} />
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
