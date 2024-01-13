import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const RestaurantScreen = () => {
  const {
    params: {
      id,
      imageUrl,
      title,
      rating,
      genre,
      address,
      short_desc,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default RestaurantScreen;
