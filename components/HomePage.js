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
import TrendingSection from "./TrendingSection";
import CategoriesSection from "./CategoriesSection";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";

const HomePage = ({ navigation }) => {

  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  });

  const {currentUser} = useContext(AuthContext);
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
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
                <Image source={{ uri: currentUser.picture }} style={styles.profileImage} />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        <ScrollView>        
          {/* { /* Trending */}
          <TrendingSection navigation={navigation} />

          {/* Categories */}
          <CategoriesSection navigation={navigation} />

        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
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
