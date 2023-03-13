import { View, Image, Text, TextInput, Pressable } from "react-native";
import React from "react";

export default function Login({ navigation }) {
  const navigateonboarding = () => {
    navigation.navigate("CreateAccount");
  };
  const navigateonboarding2 = () => {
    navigation.navigate("Home");
  };
  const ForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };
  return (
    <View style={{ height: "100%", padding: 30, alignItems: "center" }}>
      <Image
        style={{ marginTop: "20%" }}
        source={require("../image/welcomeback.png")}
      />
      <Text
        style={{
          fontSize: 32,
          fontWeight: "800",
          color: "black",
          marginTop: 20,
        }}
      >
        Welcome back!
      </Text>
      <Text
        style={{
          fontSize: 17,
          fontWeight: "400",
          color: "black",
          marginTop: 5,
        }}
      >
        Log in to your existant account
      </Text>

      <TextInput
        placeholder="Username"
        style={{
          height: 60,
          borderRadius: 10,
          backgroundColor: "white",
          paddingLeft: 20,
          fontSize: 17,
          fontWeight: "400",
          width: "100%",
          marginTop: 25,
        }}
      />

      <TextInput
        placeholder="Password"
        style={{
          height: 60,
          borderRadius: 10,
          backgroundColor: "white",
          paddingLeft: 20,
          fontSize: 17,
          fontWeight: "400",
          width: "100%",
          marginTop: 25,
        }}
      />

      <Text
        style={{
          color: "#FF640D",
          fontSize: 15,
          fontWeight: "700",
          textAlign: "right",
          width: "100%",
          marginTop: 12,
        }}
        onPress={ForgotPassword}
      >
        Forget Password?
      </Text>

      <Pressable
        style={{
          backgroundColor: "#FF640D",
          borderRadius: 10,
          height: 52,
          width: 166,
          marginTop: 20,
        }}
        onPress={navigateonboarding2}
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
          LOG IN
        </Text>
      </Pressable>

      <Text
        style={{
          fontWeight: "400",
          fontSize: 14,
          color: "black",
          marginTop: 20,
        }}
      >
        Or connect using
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#FF640D",
            borderRadius: 5,
            height: 36,
            width: 114,
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ marginRight: 8 }}
            source={require("../image/google.png")}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              fontWeight: "700",
              color: "white",
            }}
          >
            Google
          </Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: "#FF640D",
            borderRadius: 5,
            height: 36,
            width: 114,
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ marginRight: 8 }}
            source={require("../image/facebook.png")}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              fontWeight: "700",
              color: "white",
            }}
          >
            Facebook
          </Text>
        </Pressable>
      </View>

      <View style={{ flexDirection: "row", marginTop: 25 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            color: "rgba(0, 0, 0, 0.5)",
          }}
        >
          Don’t have an account?
        </Text>
        <Pressable onPress={navigateonboarding}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#FF640D",
              marginLeft: 5,
            }}
          >
            Sign Up
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
