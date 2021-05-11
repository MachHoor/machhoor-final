//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";
import colors from "../config/colors";
import { useState } from "react";
import MButton from "./UI/MButton";
import MButtonOutlined from "./UI/MButtonOutlined";
import MLink from "./UI/MLink";
import { Formik } from "formik";
import * as Yup from 'yup';
import axios from "axios";



// create a component
const LoginPage = ({ navigation }) => {

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email Address.").required("Email Address is required."),
    password: Yup.string()
    .min(2, "Invalid Password!")
    .max(50, "Too Long!")
    .required("Password is required."),
  });

  const onSubmit = async (values) => {
    console.log(values);

    axios.post('http://192.168.1.19:5000/api/authentication/login', {
      username: values.email,
      password: values.password
    }).then((response) => {
      if(response.status == 200){
        let token = response.data.data;
        alert(token);
        navigation.navigate('HomePage');
      }
      console.log(response.data);
    }, (error) => {
      console.log(error);
    });;

  }

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
              <Text style={styles.usernameValidation}>{errors.email}</Text>
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
              <Text style={styles.usernameValidation}>{errors.password}</Text>
            ) : null}

            <MButton text="Log In" 
            onPress={handleSubmit}
            disabled={(errors.email && touched.email) || (errors.password && touched.password)} />

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
export default LoginPage;
