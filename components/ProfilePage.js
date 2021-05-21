import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import profile from '../assets/images/person.jpg';
import MButtonOutlined from './UI/MButtonOutlined';
import { AuthContext } from '../auth/AuthProvider';
import ChangePasswordPage from './ChangePasswordPage';

const ProfilePage = ({route, navigation}) => {

  const { logout, currentUser } = useContext(AuthContext);

  useEffect(() => {
    console.log(currentUser);
  }, []);

    return (
      <View style={styles.container}>
        <ScrollView>
          {/* Header */}
          <SafeAreaView>
            <View style={styles.menuWrapper}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Entypo name="chevron-left" size={32} color={colors.black} />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
          <View style={styles.header}>
            <Image source={profile} style={styles.profileImage} />
            <Text style={styles.fullName}>{currentUser.profile && currentUser.profile.fullName}</Text>
            <Text style={styles.email}>{currentUser.email}</Text>
          </View>
          <View style={styles.ProfileMenu}>
            <TouchableOpacity onPress={() => navigation.navigate('ChangePasswordPage')} >
              <View style={styles.menuItem}>
                <View style={styles.menuItemInner}>
                  <Entypo
                    name="lock"
                    size={32}
                    color={colors.orange}
                    style={styles.menuIcon}
                  />
                  <Text style={styles.menuText}>Change Your Password</Text>
                </View>
                <Entypo name="chevron-right" size={32} color={colors.black} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate("FavoritesPage")}>
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
            <TouchableOpacity onPress={()=> navigation.navigate("MyRequestsPage")}>
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
            
            <MButtonOutlined text="Log Out" onPress={() => logout()} />
          </View>
        </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({
  ProfileMenu: {
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
});


export default ProfilePage;