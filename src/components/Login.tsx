import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
import Header from '../styles/Header';
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

export interface LoginProps {
    navigation: any;
} 

export const Login = (props: LoginProps) => {
  return (
    <View style={styles.root}>
      <View style={styles.background}>
        <View style={styles.rectStack}>
          <ImageBackground
            style={styles.rect}
            imageStyle={styles.rect_imageStyle}
            source={require("../assets/images/Gradient_LZGIVfZ.png")}
          >
            <View style={Header.logo}>
              <View style={Header.endWrapperFiller}></View>
              <View style={Header.text3Column}>
                <Text style={Header.text3}>BO</Text>
                <View style={Header.rect7}></View>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.rect8}>
            <View style={styles.usernameColumn}>
              <View style={styles.username}>
                <EvilIconsIcon
                  name="user"
                  style={styles.icon22}
                ></EvilIconsIcon>
                <TextInput
                  placeholder="Username"
                  placeholderTextColor="rgba(255,255,255,1)"
                  secureTextEntry={false}
                  style={styles.usernameInput}
                ></TextInput>
              </View>
              <View style={styles.password}>
                <EvilIconsIcon name="lock" style={styles.icon2}></EvilIconsIcon>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="rgba(255,255,255,1)"
                  secureTextEntry={false}
                  style={styles.passwordInput}
                ></TextInput>
              </View>
            </View>
            <View style={styles.usernameColumnFiller}></View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Channels")}
              style={styles.button4}
            >
              <Text style={styles.text2}>Get Started</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerTexts}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("SignUp")}
              style={styles.button2}
            >
              <View style={styles.createAccountFiller}></View>
              <Text style={styles.createAccount}>Create Account</Text>
            </TouchableOpacity>
            <View style={styles.button2Filler}></View>
            <Text style={styles.needHelp}>Need Help?</Text>
          </View>
        </View>
      </View>
      <StatusBar
        animated={false}
        barStyle="light-content"
        hidden={false}
        backgroundColor="rgba(0,0,0,0)"
      ></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#71c292"
  },
  background: {
    flex: 1
  },
  rect: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  rect_imageStyle: {
    opacity: 0.69
  },
  rect8: {
    top: 329,
    left: 41,
    height: 230,
    position: "absolute",
    right: 41
  },
  username: {
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row"
  },
  icon22: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 20,
    alignSelf: "center"
  },
  usernameInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14
  },
  password: {
    height: 59,
    backgroundColor: "rgba(253,251,251,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 27
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 20,
    alignSelf: "center"
  },
  passwordInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 8,
    marginTop: 14
  },
  usernameColumn: {},
  usernameColumnFiller: {
    flex: 1
  },
  button4: {
    height: 59,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 5,
    justifyContent: "center"
  },
  text2: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  footerTexts: {
    left: 37,
    height: 14,
    position: "absolute",
    right: 36,
    bottom: 36,
    flexDirection: "row"
  },
  button2: {
    width: 104,
    height: 14,
    alignSelf: "flex-end"
  },
  createAccountFiller: {
    flex: 1
  },
  createAccount: {
    color: "rgba(255,255,255,0.5)"
  },
  button2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  needHelp: {
    color: "rgba(255,255,255,0.5)",
    alignSelf: "flex-end",
    marginRight: -1
  },
  rectStack: {
    flex: 1
  }
});

export default Login;
