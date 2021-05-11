import React from 'react';
import { View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import { Entypo } from '@expo/vector-icons';
const height = Dimensions.get('window').height;


const DetailsPage = ({route, navigation}) => {


    const {item} = route.params;
   
      return (
        <View style={styles.container}>
          <ImageBackground
            source={item.image}
            style={styles.backgroundImage}
          >
            <TouchableOpacity
              style={styles.backIcon}
              onPress={() => navigation.goBack()}
            >
              <Entypo name="chevron-left" size={32} color={colors.white} />
            </TouchableOpacity>
            <View style={styles.titlesWrapper}>
              <Text style={styles.itemTitle}>{item.name}</Text>
              <View style={styles.locationWrapper}>
                <Entypo name="location-pin" size={24} color={colors.white} />
                <Text style={styles.locationText}>{item.category}</Text>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.descriptionWrapper}>
            <View style={styles.heartWrapper}>
              <Entypo name="heart" size={32} color={colors.orange} />
            </View>
            <View style={styles.descriptionTextWrapper}>
              <Text style={styles.descriptionTitle}>Description</Text>
              <Text style={styles.descriptionText}>{item.description}</Text>
            </View>

            <View style={styles.infoWrapper}>
              <View style={styles.infoItem}>
                <Text style={styles.infoTitle}>PRICE</Text>
                <View style={styles.infoTextWrapper}>
                  <Text style={styles.infoText}>${item.price}</Text>
                  <Text style={styles.infoSubText}>/minute</Text>
                </View>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoTitle}>RATING</Text>
                <View style={styles.infoTextWrapper}>
                  <Text style={styles.infoText}>{item.rating}</Text>
                  <Text style={styles.infoSubText}>/5</Text>
                </View>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoTitle}>DURATION</Text>
                <View style={styles.infoTextWrapper}>
                  <Text style={styles.infoText}>{item.duration}</Text>
                  <Text style={styles.infoSubText}> minutes</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={() => navigation.navigate('RequestPage', {item: item})}
            >
              <Text style={styles.buttonText}>Request a Video</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    backgroundImage: {
      height: height * 0.6,
      justifyContent: 'space-between',
    },
    descriptionWrapper: {
      flex: 1,
      backgroundColor: colors.white,
      marginTop: -20,
      borderRadius: 25,
    },
    backIcon: {
      marginLeft: 20,
      marginTop: 60,
    },
    titlesWrapper: {
      marginHorizontal: 20,
      marginBottom: 40,
    },
    itemTitle: {
      fontFamily: 'Lato_900Black',
      fontSize: 32,
      color: colors.white,
    },
    locationWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
    },
    locationText: {
      fontFamily: 'Lato_900Black',
      fontSize: 16,
      color: colors.white,
    },
    heartWrapper: {
      position: 'absolute',
      right: 40,
      top: -30,
      width: 64,
      height: 64,
      backgroundColor: colors.white,
      borderRadius: 64,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    descriptionTextWrapper: {
      marginTop: 30,
      marginHorizontal: 20,
    },
    descriptionTitle: {
      fontFamily: 'Lato_900Black',
      fontSize: 24,
      color: colors.black,
    },
    descriptionText: {
      marginTop: 20,
      fontFamily: 'Lato_400Regular',
      fontSize: 16,
      color: colors.darkGray,
      height: 85,
    },
    infoWrapper: {
      flexDirection: 'row',
      marginHorizontal: 20,
      marginTop: 20,
      justifyContent: 'space-between',
    },
    infoItem: {},
    infoTitle: {
      fontFamily: 'Lato_900Black',
      fontSize: 12,
      color: colors.gray,
    },
    infoTextWrapper: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginTop: 5,
    },
    infoText: {
      fontFamily: 'Lato_900Black',
      fontSize: 24,
      color: colors.orange,
    },
    infoSubText: {
      fontFamily: 'Lato_900Black',
      fontSize: 14,
      color: colors.gray,
    },
    buttonWrapper: {
      marginHorizontal: 20,
      marginTop: 40,
      backgroundColor: colors.orange,
      alignItems: 'center',
      paddingVertical: 15,
      borderRadius: 10,
    },
    buttonText: {
      fontFamily: 'Lato_900Black',
      fontSize: 18,
      color: colors.white,
    },
  });


export default DetailsPage;