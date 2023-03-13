import { View, Text, Image, Pressable } from "react-native";
import React from "react";

export default function ForgotPassword({ navigation }) {
  const navigateonboarding = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={{ height: "100%", alignItems: "center" }}>
      <Pressable style={{ marginTop: 70, width: "100%", paddingLeft: 30 }}>
        <Image source={require("../image/right.png")} />
      </Pressable>
      <Image
        style={{ marginTop: 150 }}
        source={require("../image/ForgotPassword.png")}
      />
      <Text
        style={{
          fontSize: 21,
          fontWeight: "800",
          color: "black",
          marginTop: 20,
        }}
      >
        OTP verification
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "400",
          lineHeight:18 ,
          width: "75%",
          textAlign: "center",
          marginTop: 5,
        }}
      >
        We will send you an{" "}
        <Text
          style={{
            fontSize: 14,
            fontWeight: "700",  
          }}
        >
          One Time Password
        </Text>{" "}
        this mobile number
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
          GET OTP
        </Text>
      </Pressable>
    </View>
  );
}
