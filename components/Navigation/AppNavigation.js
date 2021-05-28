//import liraries
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RequestPage from '../RequestPage';
import DetailsPage from '../DetailsPage';
import ProfilePage from '../ProfilePage';
import MyRequestsPage from '../MyRequestsPage';
import ChangePasswordPage from '../ChangePasswordPage';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

// create a component
const AppNavigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetailsPage"
            component={DetailsPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProfilePage"
            component={ProfilePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RequestPage"
            component={RequestPage}
            options={{ headerShown: false }}/>
          <Stack.Screen
            name="MyRequestsPage"
            component={MyRequestsPage}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="ChangePasswordPage"
            component={ChangePasswordPage}
            options={{ headerShown: false }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

//make this component available to the app
export default AppNavigation;
