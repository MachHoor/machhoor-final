//import liraries
import { Entypo } from '@expo/vector-icons';
import { Formik } from 'formik';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import * as Yup from 'yup';
import MButton from './UI/MButton';
import profile from "../assets/images/person.jpg";
import { changePassword } from '../api/api';

// create a component
const ChangePasswordPage = ({navigation}) => {

    const ChangePasswordSchema = Yup.object().shape({
        oldPassword: Yup.string().required("Enter the old password."),
        newPassword: Yup.string().min(4, "New Password is too short.").required("Password is required."),
        confirmNewPassword: Yup.string().oneOf([Yup.ref("newPassword"), null],"Passwords must match"),
      });

      const onSubmit = async ({oldPassword, newPassword, confirmNewPassword}) => {
        await changePassword(oldPassword, newPassword, confirmNewPassword);
        navigation.navigate("ProfilePage");
      }

    return (
        <View style={styles.container}>
        <SafeAreaView>
            <View style={styles.menuWrapper}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Entypo name="chevron-left" size={32} color={colors.black} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("ProfilePage")}
              >
                <Image source={profile} style={styles.profileImage} />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        <View style={styles.formWrapper}>
        <Formik
          validationSchema={ChangePasswordSchema}
          initialValues={{
            oldPassword: "",
            newPassword: "",
            confirmNewPassword: "",
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
              <Text style={styles.loginText}>Change Password</Text>

              <TextInput
                style={styles.inputField}
                secureTextEntry
                placeholder="Old Password"
                onChangeText={handleChange("oldPassword")}
                onBlur={handleBlur("oldPassword")}
                value={values.oldPassword}
              />
              {errors.oldPassword && touched.oldPassword && (
                <Text style={styles.usernameValidation}>{errors.oldPassword}</Text>
              )}

              <TextInput
                style={styles.inputField}
                secureTextEntry
                placeholder="New Password"
                onChangeText={handleChange("newPassword")}
                onBlur={handleBlur("newPassword")}
                value={values.newPassword}
              />
              {errors.newPassword && touched.newPassword && (
                <Text style={styles.usernameValidation}>{errors.newPassword}</Text>
              )}

              <TextInput
                style={styles.inputField}
                secureTextEntry
                placeholder="Confirm New Password"
                onChangeText={handleChange("confirmNewPassword")}
                onBlur={handleBlur("confirmNewPassword")}
                value={values.confirmNewPassword}
              />
              {errors.confirmNewPassword && touched.confirmNewPassword && (
                <Text style={styles.usernameValidation}>{errors.confirmNewPassword}</Text>
              )}

              {/* { registerError ? <Text style={styles.usernameValidation}>{registerError}</Text>: null} */}

              <MButton text="Change Password" onPress={handleSubmit} />

            </View>
          )}
        </Formik>
        
        </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    formWrapper: {
        marginTop: 20,
        paddingHorizontal: 20,
      },
    menuWrapper: {
        margin: 20,
        flexDirection: "row",
        justifyContent: "space-between"
      },
    container: {
        paddingTop: 40,
        flex: 1,
        color: colors.white,
      },
    usernameValidation: {
        color: "red",
        marginBottom: 20,
    },
    loginText: {
        fontFamily: "Lato_700Bold",
        fontSize: 28,
        marginBottom: 20,
      },
      inputField: {
        backgroundColor: colors.lightGray,
        height: 50,
        borderRadius: 15,
        marginBottom: 20,
        padding: 10,
      },
      profileImage: {
        width: 52,
        height: 52,
        borderRadius: 10,
      },
});

//make this component available to the app
export default ChangePasswordPage;
