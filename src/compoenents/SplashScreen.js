import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function SplashScreen({ navigation }) {
  const navigateonboarding = () => {
    navigation.navigate("CreateAccount");
  };
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF640D",
      }}
    >
      <StatusBar style="light" />
      <Image source={require("../image/logo.png")} />
      <Text
        style={{
          fontSize: 32,
          fontWeight: "800",
          color: "white",
          marginTop: 20,
        }}
      >
        Welcome to Bhook
      </Text>
      <Text
        style={{
          fontSize: 17,
          fontWeight: "400",
          color: "white",
          marginTop: 10,
        }}
      >
        Eat. Drink. Love.
      </Text>

      <Pressable
        style={{
          backgroundColor: "white",
          height: 55,
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
          position: "absolute",
          bottom: 30,
          borderRadius: 10,
        }}
        onPress={navigateonboarding}
      >
        <Text style={{ color: "#FF640D", fontSize: 20, fontWeight: "600" }}>
          Let’s Get Started
        </Text>
      </Pressable>
    </View>
  );
}
