//import liraries
import AsyncStorage from "@react-native-community/async-storage";
import React, { useContext } from "react";
import { useEffect } from "react";
import { View } from "react-native";
import { AuthContext } from "../../auth/AuthProvider";
import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";
import OfflineNotice from "../OfflineNotice";
import colors from '../../config/colors';

// create a component
const GlobalNavigation = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  useEffect(()=>{
    async function getCurrentUser() {
        console.log('getting current user...');
        let currentUser = await AsyncStorage.getItem('currentUser');
        if(currentUser){
            setCurrentUser(JSON.parse(currentUser));
        }
    }

    getCurrentUser();

}, []);

  return (
    <View style={{ flex:1, backgroundColor: colors.background }}>
      <OfflineNotice />
      {currentUser ? <AppNavigation /> : <AuthNavigation />}
    </View>
  );
};

//make this component available to the app
export default GlobalNavigation;
