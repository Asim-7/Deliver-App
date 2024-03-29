import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import FoodCategories from "../components/FoodCategories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  //this will start when view loads
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  //this will start when functional component loads
  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "featured"] {
            ...,
            restaurants[] -> {
              ...,
              dishes[]->
            },
          }
        `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    // { Header }
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        ></Image>

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color={"#00CCBB"} />
          </Text>
        </View>

        <UserIcon size={35} color={"#00CCBB"} />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 p-3 bg-gray-200 flex-1">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Resturant & cuisines"
            keyboardType="default"
          />
        </View>

        <AdjustmentsVerticalIcon color={"#00CCBB"} />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <FoodCategories />

        {/* Featured */}
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
