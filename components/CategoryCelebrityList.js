//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import DATA from '../config/data';
import CelebrityListItem from './CelebrityListItem';

// create a component
const CategoryCelebrityList = ({navigation}) => {
    let categoriesData = DATA.categories;

    return (
        <View style={styles.categoryListWrapper}>
            <Text style={styles.categoryListTitle}>Actors</Text>
            <View style={styles.categoryListItemsWrapper}>
              <FlatList
                style={{ marginLeft: 20 }}
                data={categoriesData}
                renderItem={({item}) => <CelebrityListItem celebrityItem={item} navigation={navigation} />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
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
  }
});

//make this component available to the app
export default CategoryCelebrityList;
