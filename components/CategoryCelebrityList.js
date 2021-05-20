//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CelebrityListItem from "./CelebrityListItem";

// create a component
const CategoryCelebrityList = ({ navigation, categories }) => {

  const renderCategoryList = (category) => {
    
    return (
      <View style={styles.categoryListWrapper}>
        <Text style={styles.categoryListTitle}>{category.name}</Text>
        <View style={styles.categoryListItemsWrapper}>
          <FlatList
            style={{ marginLeft: 20 }}
            data={category.profiles}
            renderItem={({ item }) => {
              item.category = category;
              return (
              <CelebrityListItem
                celebrityItem={item}
                navigation={navigation}
              />
            )
            }}
            keyExtractor={(profile) => profile.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  };

  return (
        <FlatList 
          data={categories}
          renderItem={ ({item}) => renderCategoryList(item)}
          keyExtractor={(category) => category.id}
          vertical
          showsHorizontalScrollIndicator={false}>
        </FlatList>
  );
};

// define your styles
const styles = StyleSheet.create({
  categoryListWrapper: {
    marginTop: 10,
  },
  categoryListTitle: {
    marginHorizontal: 20,
    fontFamily: "Lato_700Bold",
    fontSize: 24,
    color: colors.black,
  },
  categoryListItemsWrapper: {
    paddingVertical: 20,
  },
});

//make this component available to the app
export default CategoryCelebrityList;
