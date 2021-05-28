//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import TrendingItem from './TrendingItem';

// create a component
const TrendingList = ({ trendingData, navigation, celebrities }) => {

    return (
      <View style={styles.discoverItemsWrapper}>
        <FlatList
          style={{ marginLeft: 20 }}
          data={celebrities}
          renderItem={({item}) => <TrendingItem celebrityItem={item} navigation={navigation} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={(
          <Text style={{margin:20, alignSelf: 'center'}} >Trending not available for the moment. Try later.</Text>)}
        />
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
  discoverItemsWrapper: {
    paddingVertical: 20,
  },
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
  },
  discoverItemImage: {
    borderRadius: 20,
  },
  discoverItemTitle: {
    fontFamily: "Lato_700Bold",
    fontSize: 18,
    color: colors.white,
  },
  discoverItemLocationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  discoverItemLocationText: {
    marginLeft: 5,
    fontFamily: "Lato_700Bold",
    fontSize: 14,
    color: colors.white,
  },
});

//make this component available to the app
export default TrendingList;
