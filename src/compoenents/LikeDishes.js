import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";

import populardish1 from "../image/populardish1.png";
import populardish2 from "../image/populardish2.png";
import Navbar from "./Navbar";

// Navicons icons
import HomeImg from "../image/Home.png";
import FavoriteImg from "../image/FavouriteCurrent.png";
import ProfileImg from "../image/Profile.png";
import SearchImg from "../image/Search.png";

export default function LikeDishes({ navigation }) {
  const navigateonboarding = () => {
    navigation.navigate("Dish");
  };
  const PopularDishes = [
    {
      itemImg: populardish1,
      itemName: "Vegan Chickpea Curry",
      itemPrice: "150",
      itemDesc: "Loaded with protein",
    },
    {
      itemImg: populardish2,
      itemName: "One-Pot Cauliflower",
      itemPrice: "230",
      itemDesc: "Biryani is a rice dish that’s spiced...",
    },
    {
      itemImg: populardish1,
      itemName: "Vegan Chickpea Curry",
      itemPrice: "150",
      itemDesc: "Loaded with protein",
    },
    {
      itemImg: populardish2,
      itemName: "One-Pot Cauliflower",
      itemPrice: "230",
      itemDesc: "Biryani is a rice dish that’s spiced...",
    },
    {
      itemImg: populardish1,
      itemName: "Vegan Chickpea Curry",
      itemPrice: "150",
      itemDesc: "Loaded with protein",
    },
    {
      itemImg: populardish2,
      itemName: "One-Pot Cauliflower",
      itemPrice: "230",
      itemDesc: "Biryani is a rice dish that’s spiced...",
    },
    {
      itemImg: populardish1,
      itemName: "Vegan Chickpea Curry",
      itemPrice: "150",
      itemDesc: "Loaded with protein",
    },
    {
      itemImg: populardish2,
      itemName: "One-Pot Cauliflower",
      itemPrice: "230",
      itemDesc: "Biryani is a rice dish that’s spiced...",
    },
    {
      itemImg: populardish1,
      itemName: "Vegan Chickpea Curry",
      itemPrice: "150",
      itemDesc: "Loaded with protein",
    },
    {
      itemImg: populardish2,
      itemName: "One-Pot Cauliflower",
      itemPrice: "230",
      itemDesc: "Biryani is a rice dish that’s spiced...",
    },
  ];
  return (
    <View>
      <ScrollView style={{ height: "100%", padding: 25, paddingTop: 60 }}>
        <View style={{ paddingBottom: 150 }}>
          <Text style={{ fontSize: 27, fontWeight: 700 }}>LikeDishes</Text>

          {PopularDishes.map((popular, i) => {
            return (
              <View
                key={i}
                style={{
                  backgroundColor: "white",
                  marginTop: 25,
                  borderRadius: 7,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  height: 110,
                }}
              >
                <Image source={popular.itemImg} />
                <View>
                  <Text style={{ fontSize: 19, fontWeight: "700" }}>
                    {popular.itemName}
                  </Text>
                  <Text
                    style={{ fontSize: 13, fontWeight: "400", marginTop: 3 }}
                  >
                    {popular.itemDesc}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                  >
                    <Text style={{ fontSize: 15, fontWeight: "400" }}>
                      Rs {popular.itemPrice}
                    </Text>
                    <Pressable
                      style={{
                        backgroundColor: "#FF640D",
                        borderRadius: 5,
                        padding: 7,
                      }}
                      onPress={navigateonboarding}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "700",
                          color: "white",
                        }}
                      >
                        Buy now
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <Navbar Home={HomeImg} Favorite={FavoriteImg} Profile={ProfileImg}  Search={SearchImg} />
    </View>
  );
}
