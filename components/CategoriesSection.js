//import liraries
import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import CategoryCelebrityList from "./CategoryCelebrityList";
import { getCategories } from "../api/api";

// create a component
const CategoriesSection = ({ navigation }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((_categories) => {
      if (_categories) setCategories(_categories);
      console.log("_categories");
      console.log(_categories.length);

      console.log("categories");
      console.log(categories.length);
    });
  }, []);
  if (categories.length == 0) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size="large" color={colors.orange} />
      </View>
    );
  } else {
    return (
      <CategoryCelebrityList navigation={navigation} categories={categories} />
    );
  }
};

// define your styles
const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
  },
});

//make this component available to the app
export default CategoriesSection;
