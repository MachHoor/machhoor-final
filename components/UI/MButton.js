//import liraries
import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// create a component
const MButton = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    buttonWrapper: {
        marginTop: 40,
        backgroundColor: colors.orange,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
      },
      buttonText: {
        fontFamily: 'Lato_900Black',
        fontSize: 18,
        color: colors.white,
      },
});

//make this component available to the app
export default MButton;
