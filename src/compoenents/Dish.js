import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React, { useState } from "react";

import Navbar from "../compoenents/Navbar";

import populardish1 from "../image/populardish1.png";
import populardish2 from "../image/populardish2.png";

// Navicons icons
import HomeImg from "../image/HomeCurrent.png";
import FavoriteImg from "../image/Favorite.png";
import ProfileImg from "../image/Profile.png";
import SearchImg from "../image/Search.png";

export default function Dish({ navigation }) {
  const [count, setCount] = useState(0);

  const inncrese = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  const navigateonboarding = () => {
    navigation.navigate("Dish");
  };
  const AddDeliveryAddressPage = () => {
    navigation.navigate("AddDeliveryAddress");
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
    <View style={{ height: "100%" }}>
      <ScrollView
        alwaysBounceVertical={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{
          height: "100%",
          padding: 20,
          paddingTop: "18%",
          paddingBottom: "12%",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image source={require("../image/DishDetailImg.png")} />
          <Text
            style={{
              fontSize: 28,
              fontWeight: "800",
              textAlign: "left",
              width: "90%",
              marginTop: 15,
            }}
          >
            Vegan Chickpea Curry
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              marginTop: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                width: "35%",
              }}
            >
              <Image source={require("../image/Star.png")} />
              <Image source={require("../image/Star.png")} />
              <Image source={require("../image/Star.png")} />
              <Image source={require("../image/Star.png")} />
            </View>
            <Text>4.0 ( 80 reviews )</Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              width: "88%",
              textAlign: "left",
              marginTop: 13,
            }}
          >
            Seller: Raj Kitchen
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "95%",
              justifyContent: "space-between",
              marginTop: 17,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                width: "50%",
              }}
            >
              <Pressable
                style={{
                  backgroundColor: "#FF640D",
                  height: 35,
                  width: 35,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 5,
                }}
                onPress={inncrese}
              >
                <Image source={require("../image/plus.png")} />
              </Pressable>
              <Text
                style={{
                  backgroundColor: "white",
                  height: 35,
                  width: 35,
                  paddingTop: 2,
                  textAlign: "center",
                  borderRadius: 5,
                  fontSize: 21,
                  fontWeight: "800",
                }}
              >
                {count}
              </Text>
              <Pressable
                style={{
                  backgroundColor: "#FF640D",
                  height: 35,
                  width: 35,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 5,
                }}
                onPress={decrease}
              >
                <Image source={require("../image/minus.png")} />
              </Pressable>
            </View>
            <Pressable
              style={{
                backgroundColor: "#FF640D",
                height: 37,
                width: 83,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
              }}
              onPress={AddDeliveryAddressPage}
            >
              <Text style={{ color: "white", fontSize: 17, fontWeight: "700" }}>
                Buy now
              </Text>
            </Pressable>
          </View>

          <View style={{ marginTop: 25, width: "90%" }}>
            <Text style={{ fontWeight: "700", fontSize: 21 }}>
              Product Descriptions
            </Text>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 14,
                marginTop: 10,
                lineHeight: 17,
              }}
            >
              Loaded with protein, this vegan chickpea curry is mostly made with
              pantry staples. Throw in fresh or frozen spinach for a pop of
              green, and you’ve got dinner. (via Brit + Co)
            </Text>
          </View>

          <View style={{ width: "90%" }}>
            <Text
              style={{
                fontWeight: "700",
                fontSize: 21,
                marginTop: 20,
                marginBottom: 15,
              }}
            >
              Reviews
            </Text>

            <View style={{ flexDirection: "row", width: "100%" }}>
              <Image source={require("../image/reviewpeople.png")} />
              <View style={{ marginLeft: 15 }}>
                <Text style={{ fontSize: 17, fontWeight: "700" }}>
                  Rohit kumar
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    width: "82%",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      marginTop: 5,
                    }}
                  >
                    <Image source={require("../image/Star.png")} />
                    <Image source={require("../image/Star.png")} />
                    <Image source={require("../image/Star.png")} />
                    <Image source={require("../image/Star.png")} />
                  </View>
                  <Text>19-mar-2020</Text>
                </View>

                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    marginTop: 8,
                    textAlign: "justify",
                    width: "28%",
                  }}
                >
                  A perfect combination of mutton and rice. It's aroma and taste
                  were fantastic. They also provided raita with it. Overall I
                  would not recommend this restaurant
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 17,
              }}
            >
              <Text style={{ fontSize: 27, fontWeight: 700, paddingLeft: 5 }}>
                Suggestion dish
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
        </View>
      </ScrollView>
      <Navbar Home={HomeImg} Favorite={FavoriteImg} Profile={ProfileImg}  Search={SearchImg} />
    </View>
  );
}
