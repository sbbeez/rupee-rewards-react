import React, { Component } from "react";
import { Header } from "../components/common";
import { View, Image, Text } from "react-native-web";
import styles from "../components/UserDetails/styles";
import { connect } from "react-redux";
import { fetchUserDetailsAction } from "../actions";
import {
  ActivityIndicatorSpinner,
  DetailsText,
  UserPic,
  DataCard
} from "../components/common";

//ant design imports
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Button from "antd/lib/button";

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
            <UserPic
              gender={userDetails.gender}
              verified={userDetails.is_phone_verfied}
            />
            <View style={{ flex: 1,flexDirection:"row", alignItems:"space-between" }}>
              <DataCard
                value={userDetails.amount_earned}
                title={"Amount Earned"}
                image={"rupee_white"}
              />
              <DataCard
                value={userDetails.last_active}
                title={"Last Active"}
                image={"active_users"}
              />
              <DataCard
                value={userDetails.ads_watched}
                title={"Ads watched"}
                image={"total_ads_watched"}
              />
            </View>
            <View
              style={{ flexDirection: "row", marginTop: 20, marginBottom: 20 }}
            >
              <View style={{ margin: 20 }}>
                <Button type="primary">Payout</Button>
              </View>
              <View style={{ margin: 20 }}>
                <Button type="danger">Block</Button>
              </View>
            </View>
            <DetailsText text={userDetails.name} field={"Name"} />
            <DetailsText text={userDetails.email} field={"Email"} />
            <DetailsText text={userDetails.phone} field={"Phone Number"} />
            <DetailsText text={userDetails.age} field={"Age"} />
            <DetailsText text={userDetails.token} field={"Token"} />
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
