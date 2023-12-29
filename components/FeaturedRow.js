import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantFoodCard from "./ResturantFoodCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Resturant cards */}
        <ResturantFoodCard
          id={123}
          imageUrl="https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"
          title="Yo Sishi!"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_desc="This is a test description"
          dishes={[]}
          long={20}
          lat={30}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
