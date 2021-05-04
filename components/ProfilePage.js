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
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import profile from '../assets/images/person.jpg';
import AppLoading from 'expo-app-loading';
import { TextInput } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import MButtonOutlined from './UI/MButtonOutlined';

const ProfilePage = ({route, navigation}) => {
 
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
              {/* <TouchableOpacity
                onPress={() => navigation.navigate("ProfilePage")}
              >
                <Image source={profile} style={styles.profileImage} />
              </TouchableOpacity> */}
            </View>
          </SafeAreaView>
          <View style={styles.header}>
            <Image source={profile} style={styles.profileImage} />
            <Text style={styles.fullName}>Majdi Saibi</Text>
            <Text style={styles.email}>saibimajdi@outlook.com</Text>
          </View>
          <View style={styles.ProfileMenu}>
            <TouchableOpacity>
              <View style={styles.menuItem}>
                <View style={styles.menuItemInner}>
                  <Entypo
                    name="menu"
                    size={32}
                    color={colors.orange}
                    style={styles.menuIcon}
                  />
                  <Text style={styles.menuText}>Profile Information</Text>
                </View>
                <Entypo name="chevron-right" size={32} color={colors.black} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.menuItem}>
                <View style={styles.menuItemInner}>
                  <Entypo
                    name="heart"
                    size={32}
                    color={colors.orange}
                    style={styles.menuIcon}
                  />
                  <Text style={styles.menuText}>Favorite Celebrities</Text>
                </View>
                <Entypo name="chevron-right" size={32} color={colors.black} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.menuItem}>
                <View style={styles.menuItemInner}>
                  <Entypo
                    name="list"
                    size={32}
                    color={colors.orange}
                    style={styles.menuIcon}
                  />
                  <Text style={styles.menuText}>My Requests</Text>
                </View>
                <Entypo name="chevron-right" size={32} color={colors.black} />
              </View>
            </TouchableOpacity>
            
            <MButtonOutlined text="Log Out" onPress={() => navigation.navigate("RegisterPage")} />
          </View>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  ProfileMenu: {
    // borderWidth: 2,
    // borderColor: '#000',
    marginHorizontal: 30,
    marginVertical: 40
  },
  menuItem:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  header: {
    // borderWidth: 2,
    // borderColor: "#fff",
    alignItems: "center",
    marginTop: 40,
  },
  profileImage: {
    width: 98,
    height: 98,
    borderRadius: 10,
    marginBottom: 20
  },
  fullName: {
    fontFamily: "Lato_700Bold",
    fontSize: 24,
    marginBottom: 10
  },
  email: {
    fontFamily: "Lato_300Light",
    fontSize: 16,
  },
  container: {
    paddingTop: 40,
    flex: 1,
    color: colors.white,
  },
  menuWrapper: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  menuItemInner: {
      flexDirection: 'row'
  },
  menuIcon: {},
  menuText: {
      fontSize: 16,
      marginLeft: 20,
      alignSelf: 'center'
  },
  buttonWrapper: {
    marginTop: 40,
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: colors.orange,
    borderWidth: 2
  },
  buttonText: {
    fontFamily: 'Lato_900Black',
    fontSize: 18,
    color: colors.orange,
    marginRight: 10
  },
});


export default ProfilePage;