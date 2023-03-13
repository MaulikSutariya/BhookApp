import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { ScrollView, Image } from "react-native";

// Navicons icons
import HomeImg from "../image/Home.png";
import FavoriteImg from "../image/Favorite.png";
import ProfileImg from "../image/Profile.png";
import SearchImg from "../image/SearchCurrent.png";

import populardish1 from "../image/populardish1.png";
import populardish2 from "../image/populardish2.png";

export default function Store() {
  const [Details, setDetails] = useState(true);
  const [Dishe, setDishe] = useState(false);
  

  const DetailsHandler = () => {
    setDetails(true);
    setDishe(false);
  };
  const DisheHandler = () => {
    setDishe(true);
    setDetails(false);
  };

  const Store = [
    {
      StoreName: "Chicken Tikka ",
      Review: "80",
      Time: "15",
    },
    {
      StoreName: "Chicken Tikka ",
      Review: "80",
      Time: "15",
    },
    {
      StoreName: "Chicken Tikka ",
      Review: "80",
      Time: "15",
    },
    {
      StoreName: "Chicken Tikka ",
      Review: "80",
      Time: "15",
    },
    {
      StoreName: "Chicken Tikka ",
      Review: "80",
      Time: "15",
    },
    {
      StoreName: "Chicken Tikka ",
      Review: "80",
      Time: "15",
    },
    {
      StoreName: "Chicken Tikka ",
      Review: "80",
      Time: "15",
    },
    {
      StoreName: "Chicken Tikka ",
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
    <View style={{ height: "100%" }}>
      <ScrollView>
        <View
          style={{
            padding: 20,
            paddingTop: 70,
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: 90,
          }}
        >
          <Image
            style={{ borderRadius: 10 }}
            source={require("../image/storesIMg.png")}
          />

          <Text
            style={{
              fontSize: 27,
              fontWeight: "800",
              width: "100%",
              paddingLeft: 15,
              paddingTop: 20,
            }}
          >
            Raj non-veg store
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "95%",
              marginTop: 15,
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image source={require("../image/Star.png")} />
              <Image source={require("../image/Star.png")} />
              <Image source={require("../image/Star.png")} />
              <Image source={require("../image/Star.png")} />
            </View>
            <Text>4.5 ( 50 reviews )</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Pressable
              style={{
                width: "50%",
                alignItems: "center",
                borderBottomWidth: 1,
                borderRightWidth: 1,
                padding: 8,
                borderBottomColor: "rgba(0, 0, 0, 0.8)",
                borderRightColor: "rgba(0, 0, 0, 0.8)",
              }}
              onPress={DetailsHandler}
            >
              <Text style={{ fontSize: 17, fontWeight: "700",color: "rgba(0, 0, 0, 0.8)" }}>Details</Text>
            </Pressable>
            <Pressable
              style={{
                width: "50%",
                alignItems: "center",
                borderBottomWidth: 1,
                padding: 8,
                borderBottomColor: "rgba(0, 0, 0, 0.8)",
              }}
              onPress={DisheHandler}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "700",
                  color: "rgba(0, 0, 0, 0.8 )",
                }}
              >
                Dishes
              </Text>
            </Pressable>
          </View>

          {/* store Details */}

          {Details && (
            <View style={{ width: "100%" }}>
              <Text
                style={{
                  width: "100%",
                  fontSize: 21,
                  fontWeight: "700",
                  marginTop: 15,
                  color: "rgba(0, 0, 0, 0.8)",
                }}
              >
                Store Descriptions
              </Text>
              <Text
                style={{
                  width: "100%",
                  fontSize: 14,
                  fontWeight: "400",
                  marginTop: 5,
                  color: "rgba(0, 0, 0, 0.8)",
                  lineHeight: 17,
                  textAlign: "justify",
                }}
              >
                Raj non-veg store in Thane West has a wide range of products and
                services to cater to the varied requirements of their customers.
                The staff at this establishment are courteous and prompt at
                providing any assistance
              </Text>

              <View
                style={{ flexDirection: "row", width: "100%", marginTop: 15 }}
              >
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
                    A perfect combination of mutton and rice. It's aroma and
                    taste were fantastic. They also provided raita with it.
                    Overall I would not recommend this restaurant
                  </Text>
                </View>
              </View>

              <View
                style={{ flexDirection: "row", width: "100%", marginTop: 15 }}
              >
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
                    A perfect combination of mutton and rice. It's aroma and
                    taste were fantastic. They also provided raita with it.
                    Overall I would not recommend this restaurant
                  </Text>
                </View>
              </View>
            </View>
          )}

          {/* store dishes */}

          {Dishe && (
            <View style={{ width: "100%" }}>
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
                  Hot dishes
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
                    >
                      <Image source={require("../image/hotDish1.png")} />
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: "700",
                          marginTop: 10,
                        }}
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
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
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
                <Text style={{ fontSize: 17, fontWeight: 800, paddingLeft: 5 }}>
                Other dishes
                </Text>
                <Text
                  style={{ fontSize: 14, fontWeight: 700 }}
                >
                  See all
                </Text>
              </View>

              <View
                style={{
                  paddingLeft: 20,
                  paddingRight: 20,
                //   paddingBottom: 90,
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
                          style={{
                            fontSize: 13,
                            fontWeight: "400",
                            marginTop: 3,
                          }}
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
          )}
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
