import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const FoodCategories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imageUrl="https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"
        title="Testing1"
      />
      <CategoryCard
        imageUrl="https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"
        title="Testing2"
      />
      <CategoryCard
        imageUrl="https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"
        title="Testing3"
      />
      <CategoryCard
        imageUrl="https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"
        title="Testing1"
      />
      <CategoryCard
        imageUrl="https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"
        title="Testing2"
      />
      <CategoryCard
        imageUrl="https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"
        title="Testing3"
      />
    </ScrollView>
  );
};

export default FoodCategories;
