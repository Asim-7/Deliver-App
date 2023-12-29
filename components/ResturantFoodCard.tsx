import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

interface Props {
  id: number;
  imageUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_desc: string;
  dishes: any;
  long: number;
  lat: number;
}

const ResturantFoodCard = ({
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
}: Props) => {
  return (
    <TouchableOpacity>
      <Image
        source={{
          uri: imageUrl,
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View>
        <Text className="font-bold text-lg p-2">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ResturantFoodCard;
