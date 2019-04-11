import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, CardSection, Button, Confirm } from "./common";

class PresentState extends Component {
  state = { showModal: false };

  onAccept() {
    this.setState({ showModal: false });
  }
  onDecline() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <Card>
        <CardSection>
          <View>
            <Text style={styles.titleStyle}>Battery is </Text>
          </View>
        </CardSection>

        <CardSection>
          <View>
            <Text style={styles.titleStyle}>Soil Moisture Content is </Text>
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
  }
};

export default PresentState;
