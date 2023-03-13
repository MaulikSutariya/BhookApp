import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";

import Navbar from "./Navbar";

import Dinner from "../image/Dinner.png";
import Lunch from "../image/Lunch.png";
import Breakfast from "../image/Breakfast.png";
import Dessert from "../image/Dessert.png";

import populardish1 from "../image/populardish1.png";
import populardish2 from "../image/populardish2.png";

// Navicons icons
import HomeImg from "../image/Home.png";
import FavoriteImg from "../image/Favorite.png";
import ProfileImg from "../image/Profile.png";
import SearchImg from "../image/SearchCurrent.png";

export default function Search({ navigation }) {
  const navigateonboarding = () => {
    navigation.navigate("Dish");
  };
  const StorePage = () => {
    navigation.navigate("Store");
  };
  const FoodList = [
    {
      Food: "Dinner",
      FoodImage: Dinner,
    },
    {
      Food: "Lunch",
      FoodImage: Lunch,
    },
    {
      Food: "Breakfast",
      FoodImage: Breakfast,
    },
    {
      Food: "Dessert",
      FoodImage: Dessert,
    },
    {
      Food: "Dinner",
      FoodImage: Dinner,
    },
    {
      Food: "Lunch",
      FoodImage: Lunch,
    },
    {
      Food: "Breakfast",
      FoodImage: Breakfast,
    },
    {
      Food: "Dessert",
      FoodImage: Dessert,
    },
  ];

  const Store = [
    {
      StoreName: "Raj non-veg store",
      Review: "80",
      Time: "15",
    },
    {
      StoreName: "Raj non-veg store",
      Review: "80",
      Time: "15",
    },
    {
      StoreName: "Raj non-veg store",
      Review: "80",
      Time: "15",
    },
    {
      StoreName: "Raj non-veg store",
      Review: "80",
      Time: "15",
    },
    {
      StoreName: "Raj non-veg store",
      Review: "80",
      Time: "15",
    },
    {
      StoreName: "Raj non-veg store",
      Review: "80",
      Time: "15",
    },
    {
      StoreName: "Raj non-veg store",
      Review: "80",
      Time: "15",
    },
    {
      StoreName: "Raj non-veg store",
      Review: "80",
      Time: "15",
    },
  ];

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
    <View style={{ height: "100%", paddingTop: 20 }}>
      <ScrollView style={{ height: "100%" }}>
        <View style={{ position: "relative", padding: 20 }}>
          <Image
            style={{ position: "absolute", top: 60, left: 40, zIndex: 1 }}
            source={require("../image/HomeSearch.png")}
          />
          <TextInput
            placeholder="Search"
            selectionColor="black"
            style={{
              height: 50,
              borderRadius: 10,
              backgroundColor: "#E1E1E1",
              paddingLeft: 20,
              marginTop: 25,
              fontSize: 18,
              fontWeight: "400",
              color: "black",
              paddingLeft: 60,
              zIndex: 0,
            }}
          />
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 0 }}
        >
          {FoodList.map((food, i) => {
            return (
              <View key={i} style={{ margin: 12 }}>
                <View
                  style={{
                    height: 80,
                    width: 80,
                    backgroundColor: "#FF640D",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                  }}
                >
                  <Image source={food.FoodImage} />
                </View>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 400,
                    textAlign: "center",
                    marginTop: 8,
                  }}
                >
                  {food.Food}
                </Text>
              </View>
            );
          })}
        </ScrollView>

        <Text
          style={{
            fontSize: 21,
            fontWeight: "800",
            color: "rgba(255, 100, 13, 0.8)",
            paddingLeft: 20,
            marginTop: 5,
          }}
        >
          Search Result “ Chicken”
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: 800, paddingLeft: 5 }}>
            Store near by
          </Text>
          <Text style={{ fontSize: 14, fontWeight: 700 }}>See all</Text>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{ padding: 10, width: "100%" }}
        >
          {Store.map((Stores, i) => {
            return (
              <Pressable
                key={i}
                style={{
                  padding: 15,
                  backgroundColor: "white",
                  borderRadius: 5,
                  margin: 10,
                }}
                onPress={StorePage}
              >
                <Image source={require("../image/Store1.png")} />
                <Text
                  style={{ fontSize: 17, fontWeight: "700", marginTop: 10 }}
                >
                  {Stores.StoreName}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 8,
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={require("../image/Star.png")} />
                    <Image source={require("../image/Star.png")} />
                    <Image source={require("../image/Star.png")} />
                    <Image source={require("../image/Star.png")} />
                  </View>
                  <Text style={{ fontSize: 11, fontWeight: "400" }}>
                    {Stores.Review} reviews
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Text style={{ fontSize: 12, fontWeight: 400 }}>
                    Delivery time :{" "}
                  </Text>
                  <Text style={{ fontSize: 12, fontWeight: 700 }}>
                    {Stores.Time} mins
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 17,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text style={{ fontSize: 27, fontWeight: 700, paddingLeft: 5 }}>
            Popular dish
          </Text>
          <Text style={{ fontSize: 17, fontWeight: 700, color: "#FF640D" }}>
            See all
          </Text>
        </View>

        <View
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 90,
          }}
        >
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
      <Navbar
        Home={HomeImg}
        Favorite={FavoriteImg}
        Profile={ProfileImg}
        Search={SearchImg}
      />
    </View>
  );
}
