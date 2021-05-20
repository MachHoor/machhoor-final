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
  InteractionManager
} from "react-native";

import profile from "../assets/images/person.jpg";
import { getMyRequests } from '../api/api';
import { AuthContext } from "../auth/AuthProvider";

// create a component
const MyRequestsPage = ({navigation}) => {

  const { currentUser } = useContext(AuthContext);
  const [myRequests, setMyRequests] = useState([]);

  useEffect(() => {
    
    const d = async () =>{
      const profileId = currentUser.profile.id;
      console.log(profile);
      
      const result = await getMyRequests(profileId);
      console.log(result);

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
      <View style={styles.formWrapper}>
            <Text
              style={styles.title}
            >
              My Requests
            </Text>
            <Text style={styles.statusText}>New</Text>
            <FlatList
              data={myRequests}
              renderItem={({item}) => {
                return (
                  <View >
                  <Text style={{ color: 'black', marginVertical: 5 }}>
                    From: {item.from} - Insctructions: {item.instructions} 
                  </Text>
                </View>
                )
              }}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
            <Text style={styles.statusText}>In Progress</Text>
            <Text style={styles.statusText}>Completed</Text>
            <Text style={styles.statusText}>Rejected</Text>
            
          </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  statusText:{
    marginVertical: 20,
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
});

//make this component available to the app
export default MyRequestsPage;
