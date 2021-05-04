//import liraries
import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// create a component
const MButtonOutlined = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: colors.orange,
    borderWidth: 2
  },
  buttonText: {
    fontFamily: 'Lato_900Black',
    fontSize: 18,
    color: colors.orange,
    marginRight: 10
  },
});

//make this component available to the app
export default MButtonOutlined;
