import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const ResturantCard = (
  id,
  imageUrl,
  title,
  rating,
  genre,
  address,
  short_desc,
  dishes,
  long,
  lat
) => {
  return (
    <TouchableOpacity>
      <Image
        source={{
          uri: "https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg",
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View>
        <Text className="font-bold text-lg p-2">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ResturantCard;
