import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Pressable,
  // StatusBar
} from "react-native";
import React from "react";

// compoenents
import Navbar from "./Navbar";

// images

import Dinner from "../image/Dinner.png";
import Lunch from "../image/Lunch.png";
import Breakfast from "../image/Breakfast.png";
import Dessert from "../image/Dessert.png";
import Todaydish1 from "../image/homedish1.png";
import populardish1 from "../image/populardish1.png";
import populardish2 from "../image/populardish2.png";

// Navicons icons
import HomeImg from "../image/HomeCurrent.png";
import FavoriteImg from "../image/Favorite.png";
import ProfileImg from "../image/Profile.png";
import SearchImg from "../image/Search.png";

export default function Home({ navigation }) {
  const navigateonboarding = () => {
    navigation.navigate("Dish");
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

  const TodaySpecial = [
    {
      img: Todaydish1,
      itemName: "Vegan Chickpea Curry",
      itemLeft: "5",
      itemPrice: "150",
      itemDesc: "Loaded with protein",
    },
    {
      img: Todaydish1,
      itemName: "Vegan Chickpea Curry",
      itemLeft: "5",
      itemPrice: "150",
      itemDesc: "Loaded with protein",
    },
    {
      img: Todaydish1,
      itemName: "Vegan Chickpea Curry",
      itemLeft: "5",
      itemPrice: "150",
      itemDesc: "Loaded with protein",
    },
    {
      img: Todaydish1,
      itemName: "Vegan Chickpea Curry",
      itemLeft: "5",
      itemPrice: "150",
      itemDesc: "Loaded with protein",
    },
    {
      img: Todaydish1,
      itemName: "Vegan Chickpea Curry",
      itemLeft: "5",
      itemPrice: "150",
      itemDesc: "Loaded with protein",
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
    <View>
      {/* <StatusBar backgroundColor="white" /> */}
      <ScrollView
        alwaysBounceVertical={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ height: "100%", width: "100%", zIndex: 0 }}
      >
        <View style={{ padding: 20, paddingTop: "15%", paddingBottom: "20%" }}>
          <Text style={{ fontSize: 36, fontWeight: 800 }}>
            Hello,{"\n"}Maulik Patel
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 400, marginTop: 8 }}>
            What do you want to eat?
          </Text>

          <View style={{ position: "relative" }}>
            <Image
              style={{ position: "absolute", top: 39, left: 20, zIndex: 1 }}
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
            style={{ marginTop: 15 }}
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

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 27, fontWeight: 700, paddingLeft: 5 }}>
              Today’s special{" "}
            </Text>
            <Text style={{ fontSize: 17, fontWeight: 700, color: "#FF640D" }}>
              See all
            </Text>
          </View>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 15 }}
          >
            {TodaySpecial.map((dishes, i) => {
              return (
                <View key={i} style={{ margin: 15 }}>
                  <Image source={dishes.img} />
                  <View
                    style={{
                      marginTop: -95,
                      backgroundColor: "white",
                      height: 96,
                      borderRadius: 5,
                      padding: 10,
                    }}
                  >
                    <Text style={{ fontSize: 17, fontWeight: 700 }}>
                      {dishes.itemName}
                    </Text>
                    <Text
                      style={{ fontSize: 11, fontWeight: 400, marginTop: 3 }}
                    >
                      {dishes.itemDesc}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 15,
                      }}
                    >
                      <Text style={{ fontSize: 14, fontWeight: 400 }}>
                        Rs {dishes.itemPrice}
                      </Text>
                      <Text
                        style={{
                          backgroundColor: "#FF640D",
                          borderRadius: 5,
                          height: 25,
                          width: 50,
                          color: "white",
                          textAlign: "center",
                          paddingTop: 4,
                          fontSize: 12,
                          fontWeight: "700",
                        }}
                      >
                        {dishes.itemLeft} left
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 17,
            }}
          >
            <Text style={{ fontSize: 27, fontWeight: 700, paddingLeft: 5 }}>
              Popular dish
            </Text>
            <Text style={{ fontSize: 17, fontWeight: 700, color: "#FF640D" }}>
              See all
            </Text>
          </View>

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
