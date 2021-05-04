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
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import profile from "../assets/images/person.jpg";
import AppLoading from "expo-app-loading";
import { TextInput } from "react-native-gesture-handler";

const FavoritesPage = ({ route, navigation }) => {
  const favoriteCelebrities = [
    {
      id: "discover-1",
      title: "Lotfi Abdelli",
      location: "Actor",
      image: require("../assets/images/lotfi-abdelli.jpg"),
      imageBig: require("../assets/images/lotfi-abdelli.jpg"),
      description:
        "An ideal introduction to sea kayaking around the stunning historical Islands of Tofino's harbour. Come explore the spectacular scenery of the area and learn what makes the area so fascinating.",
      liked: true,
      price: 50,
      rating: 5,
      duration: 2,
    },
    {
      id: "discover-2",
      title: "Manel Amara",
      location: "Singer",
      image: require("../assets/images/manel-amara.jpg"),
      imageBig: require("../assets/images/manel-amara.jpg"),
      description:
        "Great day hikes and backpacking routes on the North and South Rim of this century-old national park include easy hikes overlooking the rim and more rugged trekking options that descend into the canyon.",
      liked: true,
      price: 350,
      rating: 4.5,
      duration: 3,
    },
    {
      id: "discover-3",
      title: "Fethi Haddaoui",
      location: "Actor",
      image: require("../assets/images/fethi-hadaoui.jpg"),
      imageBig: require("../assets/images/fethi-hadaoui.jpg"),
      description:
        "Great day hikes and backpacking routes on the North and South Rim of this century-old national park include easy hikes overlooking the rim and more rugged trekking options that descend into the canyon.",
      liked: true,
      price: 350,
      rating: 4.5,
      duration: 3,
    },
  ];

  const renderFavoriteCelebrity = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.learnMoreItemsWrapper}
        onPress={() => navigation.navigate("DetailsPage", { item: item })}
      >
        <ImageBackground
          resizeMethod="resize"
          source={item.image}
          style={styles.learnMoreItem}
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

  //const {item} = route.params;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <ScrollView>
          {/* Header */}
          <SafeAreaView>
            <View style={styles.menuWrapper}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Entypo name="chevron-left" size={32} color={colors.black} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("ProfilePage")}
              >
                <Image source={profile} style={styles.profileImage} />
              </TouchableOpacity>
            </View>
          </SafeAreaView>

          <View style={styles.formWrapper}>
            <Text
              style={{
                fontFamily: "Lato_700Bold",
                fontSize: 32,
              }}
            >
              Your Favorite Celebrities
            </Text>

            <FlatList
              data={favoriteCelebrities}
              renderItem={renderFavoriteCelebrity}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  learnMoreWrapper: {
    marginTop: 10,
  },
  learnMoreTitle: {
    fontFamily: "Lato_700Bold",
    fontSize: 24,
    color: colors.black,
  },
  learnMoreItemsWrapper: {
    paddingVertical: 20,
  },
  learnMoreItem: {
    width: "100%",
    height: 140,
  },
  learnMoreItemImage: {
    borderRadius: 20,
    resizeMode: "cover",
  },
  learnMoreItemText: {
    fontFamily: "Lato_700Bold",
    fontSize: 18,
    color: colors.white,
    marginHorizontal: 10,
    marginVertical: 100,
  },
  formWrapper: {
    marginTop: 20,
    // borderColor: '#fff',
    // borderWidth:2,
    paddingHorizontal: 20,
  },
  buttonWrapper: {
    marginTop: 40,
    backgroundColor: colors.orange,
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: "Lato_900Black",
    fontSize: 18,
    color: colors.white,
  },
});

export default FavoritesPage;
