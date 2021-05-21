import React from 'react';
import { View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import { Entypo } from '@expo/vector-icons';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import { useEffect } from 'react';
import { getCelebrityAndUserRequests } from '../api/api';
import { useState } from 'react';
import MButton from './UI/MButton';
const height = Dimensions.get('window').height;


const DetailsPage = ({route, navigation}) => {

  const {item} = route.params;
  const {currentUser} = useContext(AuthContext);
  const [alreadyRequested, setAlreadyRequested] = useState(false);

  useEffect(() => {
    async function getCelebrityAndUserRequestsLocal(){
      try{
        const celebrityProfileId = item.id;
        const userProfileId = currentUser.profile.id;

        const requests = await getCelebrityAndUserRequests(celebrityProfileId, userProfileId);

        if(requests)
            setAlreadyRequested(requests.length > 0);
      }catch(error){
        console.error(error);
        setAlreadyRequested(false);
      }
    }

    getCelebrityAndUserRequestsLocal();
  }, []);

   
      return (
        <View style={styles.container}>
          <ImageBackground
            source={{ uri: item.profilePicture.thumbnailPath}}
            style={styles.backgroundImage}
          >
            <TouchableOpacity
              style={styles.backIcon}
              onPress={() => navigation.goBack()}
            >
              <Entypo name="chevron-left" size={32} color={colors.white} />
            </TouchableOpacity>
            <View style={styles.titlesWrapper}>
              <Text style={styles.itemTitle}>{item.fullName}</Text>
              <View style={styles.locationWrapper}>
                <Entypo name="location-pin" size={24} color={colors.white} />
                <Text style={styles.locationText}>{item.category.name}</Text>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.descriptionWrapper}>
            <View style={styles.heartWrapper}>
              <Entypo name="heart" size={32} color={colors.orange} />
            </View>
            <View style={styles.descriptionTextWrapper}>
              <Text style={styles.descriptionTitle}>Description</Text>
              <Text style={styles.descriptionText}>{item.bio}</Text>
            </View>

            <View style={styles.infoWrapper}>
              <View style={styles.infoItem}>
                <Text style={styles.infoTitle}>PRICE</Text>
                <View style={styles.infoTextWrapper}>
                  <Text style={styles.infoText}>100 DT</Text>
                  <Text style={styles.infoSubText}>/minute</Text>
                </View>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoTitle}>RATING</Text>
                <View style={styles.infoTextWrapper}>
                  <Text style={styles.infoText}>4.5</Text>
                  <Text style={styles.infoSubText}>/5</Text>
                </View>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoTitle}>DURATION</Text>
                <View style={styles.infoTextWrapper}>
                  <Text style={styles.infoText}>60</Text>
                  <Text style={styles.infoSubText}>sec</Text>
                </View>
              </View>
            </View>

            {alreadyRequested ? (
              <Text style={{marginHorizontal:20, marginVertical:40, fontFamily: 'Lato_400Regular', color:colors.darkGray}}>
                You already submitted a request to {item.fullName}. 
                You will be notified once it's completed.
              </Text>
            ):(
              <View style={{marginHorizontal: 20}}>
                <MButton text="Request a Video" disabled={alreadyRequested} onPress={() => navigation.navigate('RequestPage', {item: item})} />
            </View>
            )}

            
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
      // height: 85,
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
      color: colors.darkGray,
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
      color: colors.darkGray,
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