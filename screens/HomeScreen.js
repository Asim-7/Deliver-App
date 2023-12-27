import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import FoodCategories from "../components/FoodCategories";

export default function HomeScreen() {
  const navigation = useNavigation();

  //this will start when view is laid
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
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
      <ScrollView>
        {/* Categories */}
        <FoodCategories />

        {/* Featured Rows */}
      </ScrollView>
    </SafeAreaView>
  );
}