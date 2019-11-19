import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, CardSection, Button, Confirm } from "./common";
import firebase from "firebase";

class PresentState extends Component {
  state = {
    showModal: false,
    content: []
  };
  constructor(props)
{
  super(this);
  this.gotData = this.gotData.bind(this);
}
  onAccept() {
    this.setState({ showModal: false });
    firebase
      .database()
      .ref("mode")
      .set(1);
  }
  onDecline() {
    this.setState({ showModal: false });
    firebase
      .database()
      .ref("mode")
      .set(0);
  }
  componentWillMount() {
    firebase
      .database()
      .ref("users")
      .limitToLast(10)
      .on("value", gotData);
    // data => {
    //   this.setState({ content: data.val().content.toString() });

    // firebase
    //   .database()
    //   .ref("users").limitToLast(10).on("value",data => {
    //    // snapshot.(function(data) {
    //       console.log(data.val());
    //    // });

    function gotData(data) {
      var users = data.val();
      //console.log(users);
      var keys = Object.keys(users);
      //console.log(keys);
      for (var i = 0; i < keys.length; i++) {
        var k = Object.values(users);
        // this.setState({ content: k });
        //console.log(content);
      }

      //  });

      //To Await 5 seconds to insert a new user

      // setTimeout(() => {
      //   firebase
      //     .database()
      //     .ref("users")
      //     .set({
      //       content: 40
      //     })
      //     .then(() => {
      //       console.log("INSERTED !");
      //     })
      //     .catch(error => {
      //       console.log(error);
      //     });
      // }, 5000);
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <View>
            <Text style={styles.headingStyle}>Current State </Text>
          </View>
        </CardSection>

        <CardSection>
          <View>
            <Text style={styles.titleStyle}>Soil Moisture Content is</Text>
          </View>
        </CardSection>

        <CardSection>
          <Button
            onPress={() => this.setState({ showModal: !this.state.showModal })}
          >
            Start RoboCar
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Which mode do you want?
        </Confirm>
      </Card>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  headingStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative",
    fontSize: 35
  }
};

export default PresentState;
