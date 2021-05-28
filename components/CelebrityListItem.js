//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

// create a component
const CelebrityListItem = ({celebrityItem, navigation}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("DetailsPage", { item: celebrityItem, }) }>
        <ImageBackground
          source={{ uri: celebrityItem.profilePicture.thumbnailPath}}
          style={styles.cardItem}
          imageStyle={styles.cardItemImage}
        >
          <Text style={styles.cardItemText}>{celebrityItem.fullName}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
  cardItem: {
    width: 170,
    height: 180,
    justifyContent: "flex-end",
    marginRight: 20,
  },
  cardItemImage: {
    borderRadius: 20,
  },
  cardItemText: {
    fontFamily: "Lato_700Bold",
    fontSize: 18,
    color: colors.white,
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

//make this component available to the app
export default CelebrityListItem;
