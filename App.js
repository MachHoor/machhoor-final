import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Lato_100Thin,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from '@expo-google-fonts/lato';
import HomePage from './components/HomePage';

export default function App() {
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
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        <HomePage />
        <StatusBar style="auto" />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Lato_700Bold'
  }
});
