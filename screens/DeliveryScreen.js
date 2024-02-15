import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { selectResturant } from "../features/resturantSlice";
import { XMarkIcon } from "react-native-heroicons/solid";

function DeliveryScreen() {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <Text>Order help</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default DeliveryScreen;
