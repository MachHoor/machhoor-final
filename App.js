import React from 'react';

import {
  useFonts,
  Lato_100Thin,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
import GlobalNavigation from './components/Navigation/GlobalNavigation';
import { AuthProvider } from './auth/AuthProvider';

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
      <AuthProvider>
        <GlobalNavigation />
      </AuthProvider>
    );
  }
}
