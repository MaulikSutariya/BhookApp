import { View, Text, Image, Pressable } from "react-native";
import React from "react";

export default function Slider2({ navigation }) {
    const navigateonboarding = () => {
        navigation.navigate("Slider3");
      };
    const navigateonboarding2 = () => {
        navigation.navigate("Home");
      };
  return (
    <View
      style={{ height: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <Image source={require("../image/slide2.png")} />
      <Text
        style={{
          fontSize: 32,
          fontWeight: "800",
          color: "black",
          marginTop: 20,
        }}
      >
        Enjoy fast delivery
      </Text>
      <Text
        style={{
          fontSize: 17,
          fontWeight: "400",
          lineHeight: 21,
          width: "75%",
          textAlign: "center",
          marginTop: 10,
        }}
      >
        We offer 45 minutes delivery gurantee or the food will be delivered for
        free.
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          position: "absolute",
          bottom: 30,
        }}
      >
        <Pressable onPress={navigateonboarding}>
          <Text style={{ fontSize: 16, fontWeight: "700" }}>Next</Text>
        </Pressable>
        <Image source={require("../image/slidedot2.png")} />
        <Pressable onPress={navigateonboarding2}>
          <Text style={{ fontSize: 16, fontWeight: "700" }}>Skip</Text>
        </Pressable>
      </View>
    </View>
  );
}
