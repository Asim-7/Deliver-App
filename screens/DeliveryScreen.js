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
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

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

          <Progress.Bar size={30} indeterminate={true} color="#00CCBB" />

          <Text className="mt-3 text-gray-500">
            Your order at {resturant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: resturant.lat,
          longitude: resturant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: resturant.lat,
            longitude: resturant.long,
          }}
          title={resturant.title}
          description={resturant.short_desc}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>

      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />

        <View className="flex-1">
          <Text className="text-lg">Jason Stathem</Text>
          <Text className="text-gray-400">Your rider</Text>
        </View>

        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
}

export default DeliveryScreen;
