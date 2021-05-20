//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import colors from "../config/colors";

import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import MButton from "./UI/MButton";
import MLink from "./UI/MLink";
import { Formik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";

// create a component
const RegisterPage = ({ navigation }) => {
  const RegisterSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email Address.")
      .required("Email Address is required."),
    fullName: Yup.string().required("Full Name is required."),
    password: Yup.string()
      .min(2, "Password is too short.")
      .required("Password is required."),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const {register, isLoading, registerError} = useContext(AuthContext);

  const onSubmit = async (values) => {
    console.log(values);

    try {
      register(values.fullName, values.email, values.password, values.confirmPassword);
    } catch (error) {}
  };

  if (isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size="large" color={colors.orange} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.logoWrapper}>
          <Text style={styles.logoText}>Machhoor</Text>
        </SafeAreaView>
        <Formik
          validationSchema={RegisterSchema}
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => onSubmit(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.formWrapper}>
              <Text style={styles.loginText}>Register</Text>

              <TextInput
                style={styles.inputField}
                placeholder="Full Name"
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
              />
              {errors.fullName && touched.fullName && (
                <Text style={styles.usernameValidation}>{errors.fullName}</Text>
              )}

              <TextInput
                style={styles.inputField}
                keyboardType="email-address"
                placeholder="Email Address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {errors.email && touched.email && (
                <Text style={styles.usernameValidation}>Invalid input.</Text>
              )}

              <TextInput
                style={styles.inputField}
                secureTextEntry
                placeholder="Your password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              {errors.password && touched.password && (
                <Text style={styles.usernameValidation}>Missing password.</Text>
              )}

              <TextInput
                style={styles.inputField}
                secureTextEntry
                placeholder="Confirm password"
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <Text style={styles.usernameValidation}>Missing password.</Text>
              )}

              { registerError ? <Text style={styles.usernameValidation}>{registerError}</Text>: null}

              <MButton text="Register" onPress={handleSubmit} />

              <MLink
                text="Have an account? Log In here."
                onPress={() => navigation.navigate("LoginPage")}
              />
            </View>
          )}
        </Formik>
      </View>
    );
  }
};

// define your styles
const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
  },
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
    backgroundColor: colors.lightGray,
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
