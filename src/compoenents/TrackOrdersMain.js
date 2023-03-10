import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import Navbar from "./Navbar";

// Navicons icons
import HomeImg from "../image/Home.png";
import FavoriteImg from "../image/Favorite.png";
import ProfileImg from "../image/ProfileCurrent.png";
import SearchImg from "../image/Search.png";

export default function TrackOrdersMain({ navigation }) {
  const navigateonboarding = () => {
    navigation.navigate("Profile");
  };
  const TrackOrder = () => {
    navigation.navigate("TrackOrder");
  };
  return (
    <View style={{ paddingTop: 60, height: "100%" }}>
      <Pressable
        onPress={navigateonboarding}
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Image source={require("../image/TrackorderLeft.png")} />
        <Text
          style={{
            fontSize: 27,
            fontWeight: "800",
            marginLeft: 15,
            color: "#2E3A59",
          }}
        >
          Track Order
        </Text>
      </Pressable>

      <View style={{ marginTop: 20, backgroundColor: "white", height: "100%" }}>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 20,
          }}
          onPress={TrackOrder}
        >
          <View>
            <Text style={{ fontSize: 24, fontWeight: "800" }}>Sponge Cake</Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
                color: "rgba(46, 58, 89, 0.8)",
              }}
            >
              order ID: 5t36-83k4
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#FF640D" }}>
              Rs 375/-
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image source={require("../image/order1.png")} />
            <Image
              style={{ marginLeft: 25 }}
              source={require("../image/addressRight.png")}
            />
          </View>
        </Pressable>

        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 20,
          }}
          onPress={TrackOrder}
        >
          <View>
            <Text style={{ fontSize: 24, fontWeight: "800" }}>bugger Cake</Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
                color: "rgba(46, 58, 89, 0.8)",
              }}
            >
              order ID: 5t36-83k4
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#FF640D" }}>
              Rs 375/-
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image source={require("../image/order2.png")} />
            <Image
              style={{ marginLeft: 25 }}
              source={require("../image/addressRight.png")}
            />
          </View>
        </Pressable>

        <View style={{flexDirection:"column",alignItems:"center",marginTop:60}}>
        <Image source={require("../image/ordertrack.png")} />
        <Text style={{fontSize:21,fontWeight:"700",color:"rgba(45, 55, 72, 0.8)",marginTop:15}}>Check your orders here</Text>
        </View>
      </View>

      <Navbar
        Home={HomeImg}
        Favorite={FavoriteImg}
        Profile={ProfileImg}
        Search={SearchImg}
      />
    </View>
  );
}
