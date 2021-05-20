//import liraries
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

// create a component
const TrendingItem = ({celebrityItem, navigation}) => {
    return (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DetailsPage", {
              item: celebrityItem,
            })
          }
        >
          <ImageBackground
            source={{ uri: celebrityItem.profilePicture.thumbnailPath }}
            style={[styles.trendingItem]}
            imageStyle={styles.trendingItemImage}
          >
            <Text style={styles.trendingItemName}>{celebrityItem.fullName}</Text>
            <View style={styles.trendingItemCategoryWrapper}>
              <MaterialCommunityIcons
                name="account-star-outline"
                size={18}
                color={colors.white}
              />
              <Text style={styles.trendingItemCategoryText}>{celebrityItem.category.name}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      );
};

// define your styles
const styles = StyleSheet.create({
  trendingItem: {
    width: 170,
    height: 250,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
  },
  trendingItemImage: {
    borderRadius: 20,
  },
  trendingItemName: {
    fontFamily: "Lato_700Bold",
    fontSize: 18,
    color: colors.white,
  },
  trendingItemCategoryWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  trendingItemCategoryText: {
    marginLeft: 5,
    fontFamily: "Lato_700Bold",
    fontSize: 14,
    color: colors.white,
  },
});

//make this component available to the app
export default TrendingItem;
