import React from "react";
import { SafeAreaView, Text } from "react-native";
import * as Animateable from "react-native-animatable";

function PreparingOrderScreen() {
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 items-center justify-center">
      <Animateable.Image
        source={require("../assets/orderLoading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
    </SafeAreaView>
  );
}

export default PreparingOrderScreen;
