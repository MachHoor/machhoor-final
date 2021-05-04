import React from 'react';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import colors from '../config/colors';
import { StyleSheet } from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import DetailsPage from './DetailsPage';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import LikedPage from './LikedPage';
import FavoritesPage from './FavoritesPage';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
      <Tab.Navigator
        tabBarOptions={{
          style: styles.tabBar,
          activeTintColor: colors.orange,
          inactiveTintColor: colors.gray,
          showLabel: false,
        }}>
        <Tab.Screen
          name="HomePage"
          component={HomePage}
          options={{
            tabBarIcon: ({color}) => (
              <Entypo name="home" size={32} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="FavoritesPage"
          component={FavoritesPage}
          options={{
            tabBarIcon: ({color}) => (
              <Entypo name="heart" size={32} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="account" size={32} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  
  const styles = StyleSheet.create({
    tabBar: {
      backgroundColor: colors.white,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
  });

export default TabNavigator;