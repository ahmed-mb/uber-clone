import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code Street, London, UK",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View className="bg-gray-200 h-[0.5]" />}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity className="flex-row items-center px-5 py-4">
          <Icon
            style={styles.icon}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View className="pl-5">
            <Text className="font-semibold text-lg">{location}</Text>
            <Text className="text-gray-500">{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({
  icon: {
    marginTop: 4,
    backgroundColor: "#d3d3d3",
    borderRadius: 30,
    padding: 10,
  },
});
