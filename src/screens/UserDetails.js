import React, { Component } from "react";
import { Header } from "../components/common";
import { View, Image } from "react-native-web";
import styles from "../components/UserDetails/styles";
import { connect } from "react-redux";
import { fetchUserDetailsAction } from "../actions";
import { ActivityIndicatorSpinner } from "../components/common";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

const genderImages = {
  male: require("../assets/images/male_icon.png"),
  female: require("../assets/images/female_icon.png")
};

class UserDetails extends Component {
  componentDidMount() {
    this.props.fetchUserDetailsAction(this.props.userID);
  }
  render() {
    //navigation
    const { history } = this.props;
    //state
    const { isLoadingUserDetails, userDetails } = this.props;
    return (
      <div>
        <Header showBackButton={true} onBack={() => history.goBack()} />
        {isLoadingUserDetails ? (
          <ActivityIndicatorSpinner />
        ) : (
          <View style={styles.userDetailsView}>
            <Image
              source={genderImages[userDetails.gender]}
              style={{ width: 50, height: 50 }}
            />
          </View>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { isLoadingUserDetails, userDetails } = state.userdetails;
  return { isLoadingUserDetails, userDetails };
};

export default connect(mapStateToProps, { fetchUserDetailsAction })(
  UserDetails
);
