import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import profile from "../assets/images/person.jpg";
import { TextInput } from "react-native-gesture-handler";
import MButton from "./UI/MButton";
import { AuthContext } from "../auth/AuthProvider";
import { Formik } from "formik";
import * as Yup from "yup";
import { submitRequest } from "../api/api";
import { useState } from "react";

const RequestPage = ({ route, navigation }) => {
  const SubmitRequestSchema = Yup.object().shape({
    occasion: Yup.string().required("Occasion is required."),
    who: Yup.string().required("Who field is required."),
    instructions: Yup.string().required("Instructions are required."),
  });

  const { currentUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values, onSubmitProps) => {
    setIsLoading(true);
    try {
      console.log(values);
      await submitRequest(
        values.occasion,
        values.who,
        values.instructions,
        item.id,
        currentUser.profile.id,
        currentUser.profile.fullName
      );
      setIsLoading(false);
      onSubmitProps.resetForm();
      navigation.navigate('MyRequestsPage');
    } catch (error) {}
  };

  const { item } = route.params;

  if (isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size="large" color={colors.orange} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ScrollView>
          {/* Header */}
          <SafeAreaView>
            <View style={styles.menuWrapper}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
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
                fontSize: 32,
              }}
            >
              Request
            </Text>
            <TouchableOpacity
              style={styles.learnMoreItemsWrapper}
              onPress={() => navigation.navigate("DetailsPage", { item: item })}
            >
              <ImageBackground
                resizeMethod="resize"
                source={{ uri: item.profilePicture.thumbnailPath }}
                style={styles.learnMoreItem}
                imageStyle={styles.learnMoreItemImage}
              >
                <Text style={styles.learnMoreItemText}>{item.fullName}</Text>
              </ImageBackground>
            </TouchableOpacity>
            <Formik
              validationSchema={SubmitRequestSchema}
              initialValues={{ occasion: "", who: "", instructions: "" }}
              onSubmit={onSubmit}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <>
                  <TextInput
                    style={styles.inputField}
                    placeholder="Occasion"
                    onChangeText={handleChange("occasion")}
                    onBlur={handleBlur("occasion")}
                    value={values.occasion}
                  />

                  {errors.occasion && touched.occasion && (
                    <Text style={styles.errorValidation}>
                      {errors.occasion}
                    </Text>
                  )}

                  <TextInput
                    style={styles.inputField}
                    placeholder="For Who?"
                    onChangeText={handleChange("who")}
                    onBlur={handleBlur("who")}
                    value={values.who}
                  />

                  {errors.who && touched.who && (
                    <Text style={styles.errorValidation}>{errors.who}</Text>
                  )}

                  <TextInput
                    style={styles.inputField}
                    multiline
                    editable
                    rows={4}
                    height={140}
                    numberOfLines={5}
                    placeholder="Instructions"
                    onChangeText={handleChange("instructions")}
                    onBlur={handleBlur("instructions")}
                    value={values.instructions}
                  />

                  {errors.instructions && touched.instructions && (
                    <Text style={styles.errorValidation}>
                      {errors.instructions}
                    </Text>
                  )}

                  <Text
                    style={{
                      fontFamily: "Lato_300Light",
                      fontSize: 16,
                      marginTop: 20,
                      textAlign: "justify",
                    }}
                  >
                    We will send you a notification email once your video is
                    ready. The video link will be sent to {currentUser.email}.
                  </Text>
                  <MButton text="Proceed to Payment" onPress={handleSubmit} />
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
  },
  errorValidation: {
    color: "red",
    marginBottom: 20,
  },
  inputField: {
    backgroundColor: colors.lightGray,
    height: 50,
    borderRadius: 15,
    marginTop: 20,
    padding: 10,
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
  learnMoreWrapper: {
    marginTop: 10,
  },
  learnMoreTitle: {
    fontFamily: "Lato_700Bold",
    fontSize: 24,
    color: colors.black,
  },
  learnMoreItemsWrapper: {
    paddingVertical: 20,
  },
  learnMoreItem: {
    width: "100%",
    height: 140,
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
    marginVertical: 100,
  },
  formWrapper: {
    marginTop: 20,
    // borderColor: '#fff',
    // borderWidth:2,
    paddingHorizontal: 20,
  },
});

export default RequestPage;
