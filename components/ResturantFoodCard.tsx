import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

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
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
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
        });
      }}
      className="bg-white mr-3 shadow"
    >
      <Image
        source={{
          uri: imageUrl
            ? urlFor(imageUrl).url()
            : "https://picsum.photos/200/300",
        }}
        className="h-36 w-64 rounded-sm"
      />

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> . {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" size={22} opacity={0.4} />
          <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResturantFoodCard;
