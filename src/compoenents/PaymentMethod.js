import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { RadioButton } from "react-native-paper";

import Navbar from "./Navbar";

// Navicons icons
import HomeImg from "../image/Home.png";
import FavoriteImg from "../image/Favorite.png";
import ProfileImg from "../image/ProfileCurrent.png";
import SearchImg from "../image/Search.png";

export default function PaymentMethod({ navigation }) {
  const [checked, setChecked] = useState("first");
  const navigateonboarding = () => {
    navigation.navigate("Profile");
  };
  return (
    <View style={{ height: "100%", paddingTop: 60 }}>
      <View>
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
          <Text style={{ fontSize: 27, fontWeight: "800", marginLeft: 15 }}>
            Payment method
          </Text>
        </Pressable>

        <View
          style={{
            backgroundColor: "white",
            padding: 25,
            marginTop: 20,
            height: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Image source={require("../image/visacard.png")} />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "80%",
              }}
            >
              <View>
                <Text
                  style={{ fontSize: 18, fontWeight: "700", color: "#FF640D" }}
                >
                  Visa ***1234
                </Text>
                <Text style={{ fontSize: 14, fontWeight: "400", marginTop: 4 }}>
                  Maulik Patel
                </Text>
                <Text style={{ fontSize: 14, fontWeight: "400" }}>
                  Expires 01/2024
                </Text>
              </View>
              <RadioButton.Group
                onValueChange={(newValue) => setChecked(newValue)}
                value={checked}
              >
                <RadioButton.Item value="first" color="#FF640D" />
              </RadioButton.Group>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
              marginTop: 35,
            }}
          >
            <Image source={require("../image/mastercard.png")} />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "80%",
              }}
            >
              <View>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>
                  Mastercard ***2983
                </Text>
                <Text style={{ fontSize: 14, fontWeight: "400", marginTop: 4 }}>
                  Maulik Patel
                </Text>
                <Text style={{ fontSize: 14, fontWeight: "400" }}>
                  Expires 01/2024
                </Text>
              </View>
              <RadioButton.Group
                onValueChange={(newValue) => setChecked(newValue)}
                value={checked}
              >
                <RadioButton.Item value="second" color="#FF640D" />
              </RadioButton.Group>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 50,
              paddingLeft: 10,
              paddingRight: 25,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#FF640D" }}>
              Add a new payment method
            </Text>
            <Image source={require("../image/addressRight.png")} />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 80,
            }}
          >
            <Pressable
              style={{
                height: 52,
                width: 197,
                borderColor: "#FF640D",
                borderWidth: 2,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontSize: 21, fontWeight: "700", color: "#FF640D" }}
              >
                Edit Card
              </Text>
            </Pressable>
          </View>
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
