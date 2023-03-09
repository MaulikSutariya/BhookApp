import { View, Text, Image, Pressable } from "react-native";
import React from "react";

export default function Slider3({ navigation }) {
  const navigateonboarding = () => {
    navigation.navigate("Home");
  };
  return (
    <View
      style={{ height: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <Image source={require("../image/slide3.png")} />
      <Text
        style={{
          fontSize: 32,
          fontWeight: "800",
          color: "black",
          marginTop: 20,
        }}
      >
        Order best dishes
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
        Your order will be immediately collected and sent by our courier
      </Text>

      <Pressable
        style={{
          backgroundColor: "#FF640D",
          borderRadius: 10,
          height: 52,
          width: 166,
          position: "absolute",
          bottom: 50,
        }}
        onPress={navigateonboarding}
      >
        <Text
          style={{
            textAlign: "center",
            paddingTop: 11,
            fontSize: 21,
            fontWeight: "700",
            color: "white",
          }}
        >
          CONTINUE
        </Text>
      </Pressable>
    </View>
  );
}
