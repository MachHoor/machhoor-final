//import liraries
import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// create a component
const MLink = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.forgotPasswordText}>{text}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  forgotPasswordText: {
    fontFamily: "Lato_400Regular",
    marginTop: 10,
  },
});

//make this component available to the app
export default MLink;
