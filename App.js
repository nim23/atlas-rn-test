/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import passwords from "passwords"; //previously used passwords

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: {
        text: "",
        valid: false
      },
      confirmPassword: {
        text: "",
        valid: false
      },
      buttonDisabled: true
    };
  }

  _isValidPassword = () => false;

  _onChangeEnterNewPassword = value => {
    this.setState({
      newPassword: {
        text: value,
        valid: this._isValidPassword()
      }
    });
  };

  _onChangeConfirmNewPassword = value => {
    this.setState({
      confirmPassword: {
        text: value,
        valid: this._isValidPassword()
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textLabel}>Enter new password: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={this._onChangeEnterNewPassword}
          value={this.state.text}
        />
        <Text style={styles.textLabel}>Confirm new password: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={this._onChangeConfirmNewPassword}
          value={this.state.text}
        />
        <View style={{ backgroundColor: "green", marginTop: 20 }}>
          <Button
            disabled={this.state.buttonDisabled}
            title="Reset Password"
            color="#ffffff"
            onPress={() => {}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 10,
    backgroundColor: "#F5FCFF"
  },
  textLabel: {
    textAlign: "left",
    marginTop: 20
  },
  textInput: {
    width: "100%",
    fontSize: 20,
    height: 30,
    borderWidth: 1
  }
});
