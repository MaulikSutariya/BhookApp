import { View, Image, Pressable } from "react-native";
import React from "react";

export default function Navbar({Home}) {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        position: "absolute",
        bottom: 0,
        backgroundColor: "white",
        height: 70,
        borderRadius: 15,
      }}
    >
      <Pressable>
        <Image source={require("../image/Home.png")} />
      </Pressable>
      <Pressable>
        <Image source={require("../image/Favorite.png")} />
      </Pressable>
      <Pressable>
        <Image source={require("../image/Search.png")} />
      </Pressable>
      <Pressable>
        <Image source={require("../image/Profile.png")} />
      </Pressable>
    </View>
  );
}
