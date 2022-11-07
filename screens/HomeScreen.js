import { Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import NavOptions from "./../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../features/navSlice";
import NavFavourites from "./../components/NavFavourites";

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="bg-white h-full android:pt-5">
      <View className="p-5 flex-1">
        <View className="pt-16 pb-3">
          <Image
            className="h-11 w-32"
            source={{ uri: "https://links.papareact.com/gzs" }}
          />
        </View>
        <GooglePlacesAutocomplete
          placeholder="Where From?"
          styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          returnKeyType={"search"}
          fetchDetails={true}
          nearbyPlacesAPI="GooglePlacesSearch"
          minLength={2}
          enablePoweredByContainer={false}
          debounce={400}
        />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
