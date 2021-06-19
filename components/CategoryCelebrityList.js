//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CelebrityListItem from "./CelebrityListItem";

// create a component
const CategoryCelebrityList = ({ navigation, categories }) => {

  const renderCategoryList = (category) => {
    console.log('category');
    console.log(category);
    return (
      <View style={styles.categoryListWrapper}>
        <Text style={styles.categoryListTitle}>{category.name}</Text>
        <View style={styles.categoryListItemsWrapper}>
          <FlatList
            style={{ marginLeft: 20 }}
            data={category.celebrities}
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
            ListEmptyComponent={(<Text>There's no celebrity for the moment. Try later.</Text>)}
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
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={(
          <Text style={{margin:20, alignSelf: 'center'}} >There's no celebrity for the moment. Try later.</Text>)}>
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
