import { View, Image, Text, TextInput, Pressable } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function CreateAccount({ navigation }) {
  const navigateonboarding = () => {
    navigation.navigate("Start");
  };
  const navigateonboarding2 = () => {
    navigation.navigate("Login");
  };
  const navigateonboarding3= () => {
    navigation.navigate("Slider1");
  };
  return (
    <View style={{ height: "100%", padding: 30 }}>
      <StatusBar style="dark" />
      <Pressable onPress={navigateonboarding}>
        <Image
          style={{ marginTop: 35 }}
          source={require("../image/right.png")}
        />
      </Pressable>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            color: "black",
            fontSize: 32,
            fontWeight: "800",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          Let’s Get Started
        </Text>
        <Text style={{ fontSize: 17, fontWeight: "400", marginTop: 10 }}>
          Create an new account
        </Text>
      </View>

      <View style={{ marginTop: 35 }}>
        <TextInput
          placeholder="Name"
          style={{
            height: 60,
            borderRadius: 10,
            backgroundColor: "white",
            paddingLeft: 20,
            fontSize: 17,
            fontWeight: "400",
          }}
        />
        <TextInput
          placeholder="Email"
          style={{
            height: 60,
            borderRadius: 10,
            backgroundColor: "white",
            paddingLeft: 20,
            marginTop: 25,
            fontSize: 17,
            fontWeight: "400",
          }}
        />
        <TextInput
          placeholder="Phone no"
          style={{
            height: 60,
            borderRadius: 10,
            backgroundColor: "white",
            paddingLeft: 20,
            marginTop: 25,
            fontSize: 17,
            fontWeight: "400",
          }}
        />
        <TextInput
          placeholder="Password"
          style={{
            height: 60,
            borderRadius: 10,
            backgroundColor: "white",
            paddingLeft: 20,
            marginTop: 25,
            fontSize: 17,
            fontWeight: "400",
          }}
        />
        <TextInput
          placeholder="Confirm password"
          style={{
            height: 60,
            borderRadius: 10,
            backgroundColor: "white",
            paddingLeft: 20,
            marginTop: 25,
            fontSize: 17,
            fontWeight: "400",
          }}
        />
      </View>

      <View style={{ alignItems: "center", marginTop: 40 }}>
        <Pressable
          style={{
            backgroundColor: "#FF640D",
            borderRadius: 10,
            height: 52,
            width: 166,
          }}
          onPress={navigateonboarding3}
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
            CREATE
          </Text>
        </Pressable>

        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              color: "rgba(0, 0, 0, 0.5)",
            }}
          >
            Already have an account?
          </Text>
          <Pressable onPress={navigateonboarding2}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: "#FF640D",
                marginLeft: 5,
              }}
            >
              Login here
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
