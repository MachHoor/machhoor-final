//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TrendingList from './TrendingList';
import DATA from '../config/data';
import { useState, useEffect } from 'react';
import { getCelebrities } from '../api/api';

// create a component
const TrendingSection = ({navigation}) => {
    let trendingItems = DATA.trending;
    let [trendingData, setTrendingData] = useState(trendingItems);
    let [celebrities, setCelebrities] = useState(null);

    useEffect(() => {

      async function getCelebritiesLocal(){
        console.log('calling setCelebrities...');
        const c = await getCelebrities();
        setCelebrities(c);
        console.log('calling setCelebrities ENDED...');
        //console.log(c);
        
      }
      console.log('calling getCelebritiesLocal...');
      getCelebritiesLocal();
    }, []);

    return (
      <View style={styles.discoverWrapper}>
        <Text style={styles.discoverTitle}>Trending</Text>
        <View style={styles.discoverCategoriesWrapper}>
          <TouchableOpacity
            onPress={() => {
              setTrendingData(trendingItems);
            }}
          >
            <Text
              style={[styles.discoverCategoryText, { color: colors.orange }]}
            >
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setTrendingData(
                trendingItems.filter((x) => x.category == "Actor")
              );
            }}
          >
            <Text style={styles.discoverCategoryText}>Actor</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setTrendingData(
                trendingItems.filter((x) => x.category == "Singer")
              );
            }}
          >
            <Text style={styles.discoverCategoryText}>Singer</Text>
          </TouchableOpacity>
          <Text style={styles.discoverCategoryText}>Comedian</Text>
        </View>
        <TrendingList trendingData={trendingData} celebrities={celebrities} navigation={navigation} />
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    discoverWrapper: {
        // marginHorizontal: 20,
        marginTop: 20,
      },
      discoverTitle: {
        marginHorizontal: 20,
        fontFamily: 'Lato_700Bold',
        fontSize: 32,
      },
      discoverCategoriesWrapper: {
        marginHorizontal: 20,
        flexDirection: 'row',
        marginTop: 20,
      },
      discoverCategoryText: {
        marginRight: 30,
        fontFamily: 'Lato_400Regular',
        fontSize: 16,
        color: colors.lightGray,
      },
});

//make this component available to the app
export default TrendingSection;
