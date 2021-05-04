//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from "react-native";

import colors from "../config/colors";

import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import MButton from "./UI/MButton";
import MLink from "./UI/MLink";

// create a component
const RegisterPage = ({navigation}) => {
  let [validForm, setValidForm] = useState(false);

    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.logoWrapper} >
            <Text style={styles.logoText} >Machhoor</Text>
        </SafeAreaView>
        <View style={styles.formWrapper} >
            <Text style={styles.loginText} >Register</Text>
            
            <TextInput style={styles.inputField}  placeholder="Full Name" />
            {validForm && <Text style={styles.usernameValidation} >Invalid input.</Text>}

            <TextInput style={styles.inputField}  placeholder="Email Address" />
            {validForm && <Text style={styles.usernameValidation} >Invalid input.</Text>}
            
            <TextInput style={styles.inputField} secureTextEntry placeholder="Your password" />
            {validForm && <Text style={styles.usernameValidation} >Missing password.</Text>}

            <TextInput style={styles.inputField} secureTextEntry placeholder="Confirm password" />
            {validForm && <Text style={styles.usernameValidation} >Missing password.</Text>}

            <MButton text="Register" onPress={() => navigation.navigate('HomePage')} />

            <MLink text="Have an account? Log In here." onPress={() => navigation.navigate('LoginPage')} />
        </View>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoWrapper: {
    backgroundColor: colors.orange,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -20,
  },
  logoText: {
    fontFamily: "Lato_700Bold",
    fontSize: 38,
    color: colors.white,
  },
  formWrapper: {
    paddingHorizontal: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 20,
    backgroundColor: colors.white,
    flex: 2,
  },
  loginText: {
    fontFamily: "Lato_700Bold",
    fontSize: 32,
    marginBottom: 20,
  },
  inputField: {
    backgroundColor: colors.gray,
    height: 50,
    borderRadius: 15,
    marginBottom: 20,
    padding: 10,
  },
  usernameValidation: {
    color: "red",
    marginBottom: 20,
  },
});

//make this component available to the app
export default RegisterPage;
