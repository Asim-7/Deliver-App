import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import * as Animateable from "react-native-animatable";
import * as Progress from "react-native-progress";

function PreparingOrderScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 3000);
  }, []);

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 items-center justify-center">
      <Animateable.Image
        source={require("../assets/orderLoading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animateable.Text
        className="text-lg my-10 text-white font-bold text-center"
        animation="slideInUp"
        iterationCount={1}
      >
        Waiting for restaurant to accept your order
      </Animateable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
}

export default PreparingOrderScreen;
