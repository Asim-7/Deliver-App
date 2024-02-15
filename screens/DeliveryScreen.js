import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useSelector } from "react-redux";
import { selectResturant } from "../features/resturantSlice";
import { XMarkIcon } from "react-native-heroicons/solid";

function DeliveryScreen() {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated time</Text>
              <Text className="text-4xl font-bold">40-45 mins</Text>
            </View>
            <Image
              source={{ uri: "https://picsum.photos/200/300" }}
              className="h-20 w-20"
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default DeliveryScreen;
