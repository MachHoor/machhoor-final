//import liraries
import { Entypo } from "@expo/vector-icons";
import React, { Component, useEffect, useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground
} from "react-native";

import profile from "../assets/images/person.jpg";
import { getMyRequests } from '../api/api';
import { AuthContext } from "../auth/AuthProvider";
import { ScrollView } from "react-native-gesture-handler";

// create a component
const MyRequestsPage = ({navigation}) => {

  const { currentUser } = useContext(AuthContext);
  const [myRequests, setMyRequests] = useState([]);

  const renderRequest = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.learnMoreItemsWrapper}
        // onPress={() => navigation.navigate("DetailsPage", { item: item })}
      >
        <ImageBackground
          resizeMethod="resize"
          source={{ uri: item.requestForProfile.profilePicture.thumbnailPath }}
          style={styles.learnMoreItem}
          imageStyle={styles.learnMoreItemImage}
        >
          <Text style={styles.learnMoreItemText}>
            {item.requestForProfile.fullName}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    
    const d = async () =>{
      const profileId = currentUser.profile.id;
      // console.log(profile);
      
      const result = await getMyRequests(profileId);
      // console.log(result);

      if(result)
        {
          console.log('SET MY REQUESTS');
          setMyRequests(result);
        }
    } 

    d();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.menuWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="chevron-left" size={32} color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ProfilePage")}>
            <Image source={profile} style={styles.profileImage} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView>
            <Text style={[styles.title, {marginHorizontal: 20}]}>My Requests</Text>
      <View style={styles.formWrapper}>
            <Text style={styles.statusText}>New</Text>
            <FlatList
              data={myRequests}
              renderItem={renderRequest}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
            <Text style={styles.statusText}>In Progress</Text>
            <Text style={styles.statusText}>Completed</Text>
            <Text style={styles.statusText}>Rejected</Text>
            
          </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  statusText:{
    marginVertical: 10,
  },
  title:{
    fontFamily: "Lato_700Bold",
    fontSize: 32,
  },
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
  formWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  learnMoreItem: {
    width: "100%",
    height: 80,
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
    marginVertical: 50,
  },
  learnMoreItemsWrapper: {
    paddingVertical: 20,
  },
});

//make this component available to the app
export default MyRequestsPage;
