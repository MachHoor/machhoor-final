import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  FlatList, 
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import {
    useFonts,
    Lato_100Thin,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  } from '@expo-google-fonts/lato';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import profile from '../assets/images/person.jpg';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';

const HomePage = ({navigation}) => {

  const learnMoreData = [{
    id: 'learnMore-1',
    title: 'Fethi Haddaoui',
    image: require('../assets/images/fethi-hadaoui.jpg'),
  },
  {
    id: 'learnMore-2',
    title: 'Naima El Jeni',
    image: require('../assets/images/naima-jeni.jpg'),
  },
  {
    id: 'learnMore-3',
    title: 'Lotfi Abdelli',
    image: require('../assets/images/lotfi-abdelli.jpg'),
  }];
  const discoverData = [{
    id: 'discover-1',
    title: 'Lotfi Abdelli',
    location: 'Actor',
    image: require('../assets/images/lotfi-abdelli.jpg'),
    imageBig: require('../assets/images/lotfi-abdelli.jpg'),
    description:
      "An ideal introduction to sea kayaking around the stunning historical Islands of Tofino's harbour. Come explore the spectacular scenery of the area and learn what makes the area so fascinating.",
    liked: true,
    price: 50,
    rating: 5,
    duration: 2,
  },
  {
    id: 'discover-2',
    title: 'Manel Amara',
    location: 'Singer',
    image: require('../assets/images/manel-amara.jpg'),
    imageBig: require('../assets/images/manel-amara.jpg'),
    description:
      'Great day hikes and backpacking routes on the North and South Rim of this century-old national park include easy hikes overlooking the rim and more rugged trekking options that descend into the canyon.',
    liked: true,
    price: 350,
    rating: 4.5,
    duration: 3,
  },
  {
    id: 'discover-3',
    title: 'Fethi Haddaoui',
    location: 'Actor',
    image: require('../assets/images/fethi-hadaoui.jpg'),
    imageBig: require('../assets/images/fethi-hadaoui.jpg'),
    description:
      'Great day hikes and backpacking routes on the North and South Rim of this century-old national park include easy hikes overlooking the rim and more rugged trekking options that descend into the canyon.',
    liked: true,
    price: 350,
    rating: 4.5,
    duration: 3,
  }];

  const renderDiscoverItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          //alert(item.title)
          navigation.navigate("DetailsPage", {
            item: item,
          })
        }
      >
        <ImageBackground
          source={item.image}
          style={[
            styles.discoverItem,
            // { marginLeft: item.id === "discover-1" ? 20 : 0 },
          ]}
          imageStyle={styles.discoverItemImage}
        >
          <Text style={styles.discoverItemTitle}>{item.title}</Text>
          <View style={styles.discoverItemLocationWrapper}>
            <MaterialCommunityIcons
              name="account-star-outline"
              size={18}
              color={colors.white}
            />
            <Text style={styles.discoverItemLocationText}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderLearnMoreItem = ({item}) => {
    return (
        <TouchableOpacity
        onPress={() =>
          navigation.navigate('DetailsPage', {
            item: item,
          })
        }>
        <ImageBackground
            source={item.image}
            style={[
            styles.learnMoreItem,
            {
                marginLeft: item.id === 'learnMore-1' ? 20 : 0,
            },
            ]}
            imageStyle={styles.learnMoreItemImage}>
            <Text style={styles.learnMoreItemText}>{item.title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  });

  let [trendingData, setTrendingData] = useState(discoverData);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <ScrollView>
          {/* Header */}
          <SafeAreaView>
            <View style={styles.menuWrapper}>
              <MaterialCommunityIcons
                name="menu"
                size={32}
                color={colors.black}
                style={styles.menuIcon}
              />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProfilePage")
                }
              >
                <Image source={profile} style={styles.profileImage} />
              </TouchableOpacity>
            </View>
          </SafeAreaView>

          {/* Discover */}
          <View style={styles.discoverWrapper}>
            <Text style={styles.discoverTitle}>Trending</Text>
            <View style={styles.discoverCategoriesWrapper}>
              
              <TouchableOpacity onPress={() => {
                setTrendingData(discoverData)
              }}>
                <Text style={[styles.discoverCategoryText, { color: colors.orange }]}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setTrendingData(discoverData.filter(x => x.location == 'Actor'))
              }}>
                <Text style={styles.discoverCategoryText}>Actor</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setTrendingData(discoverData.filter(x => x.location == 'Singer'))
              }}>
                <Text style={styles.discoverCategoryText}>Singer</Text>
              </TouchableOpacity>
              <Text style={styles.discoverCategoryText}>Comedian</Text>
            </View>
            <View style={styles.discoverItemsWrapper}>
              <FlatList
                style={{marginLeft: 20}}
                data={trendingData}
                renderItem={renderDiscoverItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          {/* Learn More */}
          <View style={styles.learnMoreWrapper}>
            <Text style={styles.learnMoreTitle}>Actors</Text>
            <View style={styles.learnMoreItemsWrapper}>
              <FlatList
                data={learnMoreData}
                renderItem={renderLearnMoreItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          {/* Learn More */}
          <View style={styles.learnMoreWrapper}>
            <Text style={styles.learnMoreTitle}>Singers</Text>
            <View style={styles.learnMoreItemsWrapper}>
              <FlatList
                data={learnMoreData}
                renderItem={renderLearnMoreItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    color: colors.white,
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
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
    color: colors.gray,
  },
  discoverItemsWrapper: {
    paddingVertical: 20,
  },
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
  },
  discoverItemImage: {
    borderRadius: 20,
  },
  discoverItemTitle: {
    fontFamily: 'Lato_700Bold',
    fontSize: 18,
    color: colors.white,
  },
  discoverItemLocationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  discoverItemLocationText: {
    marginLeft: 5,
    fontFamily: 'Lato_700Bold',
    fontSize: 14,
    color: colors.white,
  },
  activitiesWrapper: {
    marginTop: 10,
  },
  activitiesTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato_700Bold',
    fontSize: 24,
    color: colors.black,
  },
  activitiesItemsWrapper: {
    paddingVertical: 20,
  },
  activityItemWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
  },
  activityItemImage: {
    width: 36,
  },
  activityItemText: {
    marginTop: 5,
    fontFamily: 'Lato_700Bold',
    fontSize: 14,
    color: colors.gray,
  },
  learnMoreWrapper: {
    marginTop: 10,
  },
  learnMoreTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato_700Bold',
    fontSize: 24,
    color: colors.black,
  },
  learnMoreItemsWrapper: {
    paddingVertical: 20,
  },
  learnMoreItem: {
    width: 170,
    height: 180,
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  learnMoreItemImage: {
    borderRadius: 20,
  },
  learnMoreItemText: {
    fontFamily: 'Lato_700Bold',
    fontSize: 18,
    color: colors.white,
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

export default HomePage;