//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
} from "react-native";
import colors from "../config/colors";
import MButton from "./UI/MButton";
import MButtonOutlined from "./UI/MButtonOutlined";
import MLink from "./UI/MLink";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../auth/AuthProvider";
import AsyncStorage from "@react-native-community/async-storage";
import * as SecureStore from 'expo-secure-store';

// create a component
const LoginPage = ({ navigation }) => {
  const { login, isLoading, loginError } = useContext(AuthContext);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email Address.")
      .required("Email Address is required."),
    password: Yup.string()
      .min(2, "Invalid Password!")
      .max(50, "Too Long!")
      .required("Password is required."),
  });

  const onSubmit = async ({email, password}) => {
    try {
      login(email, password);
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
          validationSchema={LoginSchema}
          initialValues={{ email: "", password: "" }}
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
              <Text style={styles.loginText}>Log In</Text>
              <TextInput
                style={styles.inputField}
                keyboardType="email-address"
                placeholder="Email Address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <Text style={styles.errorValidation}>{errors.email}</Text>
              ) : null}

              <TextInput
                style={styles.inputField}
                secureTextEntry
                placeholder="Your password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              {errors.password && touched.password ? (
                <Text style={styles.errorValidation}>{errors.password}</Text>
              ) : null}

                { loginError ? <Text style={styles.errorValidation}>{loginError}</Text>: null}

              <MButton
                text="Log In"
                onPress={handleSubmit}
                disabled={
                  (errors.email && touched.email) ||
                  (errors.password && touched.password)
                }
              />

              <MButtonOutlined
                text="Register"
                onPress={() => navigation.navigate("RegisterPage")}
              />

              <MLink
                text="Forgot Password?"
                onPress={() => setValidForm(!validForm)}
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
  errorValidation: {
    color: "red",
    marginBottom: 20,
  },
});

//make this component available to the app
export default LoginPage;
