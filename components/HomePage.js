import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  useFonts,
  Lato_100Thin,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from "@expo-google-fonts/lato";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import profile from "../assets/images/person.jpg";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import DATA from "../config/data";
import TrendingList from "./TrendingList";
import TrendingSection from "./TrendingSection";
import CategoryCelebrityList from "./CategoryCelebrityList";

const HomePage = ({ navigation }) => {
  const categoriesData = DATA.categories;
  const trendingItems = DATA.trending;

  const renderLearnMoreItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("DetailsPage", {
            item: item,
          })
        }
      >
        <ImageBackground
          source={item.image}
          style={[
            styles.learnMoreItem,
            {
              marginLeft: item.id === "learnMore-1" ? 20 : 0,
            },
          ]}
          imageStyle={styles.learnMoreItemImage}
        >
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
                onPress={() => navigation.navigate("ProfilePage")}
              >
                <Image source={profile} style={styles.profileImage} />
              </TouchableOpacity>
            </View>
          </SafeAreaView>

          { /* Trending */}
          <TrendingSection navigation={navigation} />

          {/* Categories */}
          <CategoryCelebrityList navigation={navigation} />

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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
});

export default HomePage;
