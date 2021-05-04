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
import MButton from './UI/MButton';

const RequestPage = ({route, navigation}) => {
 
  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  });

  const {item} = route.params;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <ScrollView>
          {/* Header */}
          <SafeAreaView>
            <View style={styles.menuWrapper}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
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
                fontSize: 32
              }}
            >
              Request
            </Text>
            <TouchableOpacity style={styles.learnMoreItemsWrapper}
              onPress={ () => navigation.navigate("DetailsPage", { item: item})}>
              <ImageBackground
                resizeMethod='resize'
                source={item.imageBig}
                style={styles.learnMoreItem}
                imageStyle={styles.learnMoreItemImage}
              >
                <Text style={styles.learnMoreItemText}>{item.title}</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TextInput style={{backgroundColor: colors.gray, height: 50, borderRadius: 15, marginTop: 20, padding:10 }} placeholder="Occasion" />
            <TextInput style={{backgroundColor: colors.gray, height: 50, borderRadius: 15, marginTop: 20, padding:10 }} placeholder="For Who?" />
            <TextInput style={{backgroundColor: colors.gray, height: 50, borderRadius: 15, marginTop: 20, padding:10 }} 
            multiline
            editable
            rows={4}
            height={140}
            numberOfLines={5}
            placeholder="Instructions" />
            <Text style={{fontFamily: 'Lato_300Light', fontSize:16, marginTop: 20, textAlign: 'justify'}}>
            We will send you a notification email once your video is ready. The video link will be sent to saibimajdi@outlook.com.
            </Text>
            <MButton text="Proceed to Payment" onPress={() => alert('Proceed to Payment')} />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontFamily: 'Lato_700Bold',
    fontSize: 24,
    color: colors.black,
  },
  learnMoreItemsWrapper: {
    paddingVertical: 20,
  },
  learnMoreItem: {
    width: '100%',
    height: 140,
  },
  learnMoreItemImage: {
    borderRadius: 20,
    resizeMode: 'cover',
  },
  learnMoreItemText: {
    fontFamily: 'Lato_700Bold',
    fontSize: 18,
    color: colors.white,
    marginHorizontal: 10,
    marginVertical: 100,
  },
  formWrapper: {
    marginTop: 20,
    // borderColor: '#fff',
    // borderWidth:2,
    paddingHorizontal:20
  },
});


export default RequestPage;