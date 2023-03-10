import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";

import Navbar from "./Navbar";

// Navicons icons
import HomeImg from "../image/Home.png";
import FavoriteImg from "../image/Favorite.png";
import ProfileImg from "../image/ProfileCurrent.png";
import SearchImg from "../image/Search.png";

export default function TrackOrder({ navigation }) {
  const navigateonboarding = () => {
    navigation.navigate("Profile");
  };
  const Home = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={{ height: "100%"  }}>
      <ScrollView style={{ width: "100%", paddingTop: 60}}>
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
            Track Order
          </Text>
        </Pressable>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "flex-end",
            padding: 20,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
                color: "rgba(46, 58, 89, 0.8)",
              }}
            >
              Wed, 28 oct
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
                color: "rgba(46, 58, 89, 0.8)",
                marginTop: 5,
              }}
            >
              order ID: 5t36-83k4
            </Text>
          </View>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "700",
              color: "rgba(46, 58, 89, 0.8)",
            }}
          >
            amt: Rs 345.00
          </Text>
        </View>

        <View style={{ backgroundColor: "white", padding: 25 }}>
          <Text style={{ fontSize: 21, fontWeight: "800", color: "#2E3A59" }}>
            ETA: 15 Mins
          </Text>

          <View style={{ marginTop: 40 }}>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <View
                style={{
                  borderColor: "#FF640D",
                  borderWidth: 3,
                  borderRadius: 50,
                  height: 25,
                  width: 25,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#FF640D",
                    borderRadius: 50,
                    height: 15,
                    width: 15,
                  }}
                ></View>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={require("../image/shoppingbag.png")} />
                <View style={{ marginLeft: 15 }}>
                  <Text
                    style={{
                      color: "#FF640D",
                      fontSize: 17,
                      fontWeight: "700",
                    }}
                  >
                    Ready to pickup
                  </Text>
                  <Text
                    style={{ fontSize: 14, fontWeight: "400", marginTop: 3 }}
                  >
                    Order#757578 from Tasty food
                  </Text>
                </View>
              </View>
            </View>
            <Image
              style={{ marginLeft: 35 }}
              source={require("../image/dotLine.png")}
            />
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginLeft: -5,
              }}
            >
              <Image source={require("../image/trueOrder.png")} />
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={require("../image/OrderProcessed.png")} />
                <View style={{ marginLeft: 18 }}>
                  <Text
                    style={{
                      color: "rgba(46, 58, 89, 0.6)",
                      fontSize: 17,
                      fontWeight: "700",
                    }}
                  >
                    Order Processed
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "400",
                      marginTop: 3,
                      color: "rgba(46, 58, 89, 0.6)",
                    }}
                  >
                    We are preparing your order
                  </Text>
                </View>
              </View>
            </View>
            <Image
              style={{ marginLeft: 35 }}
              source={require("../image/dotLine.png")}
            />
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginLeft: -10,
              }}
            >
              <Image source={require("../image/trueOrder.png")} />
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={require("../image/paymentconfirm.png")} />
                <View style={{ marginLeft: 18 }}>
                  <Text
                    style={{
                      color: "rgba(46, 58, 89, 0.6)",
                      fontSize: 17,
                      fontWeight: "700",
                    }}
                  >
                    Payment Comfirmed
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "400",
                      marginTop: 3,
                      color: "rgba(46, 58, 89, 0.6)",
                    }}
                  >
                    Awaiting confirmation
                  </Text>
                </View>
              </View>
            </View>
            <Image
              style={{ marginLeft: 35 }}
              source={require("../image/dotLine.png")}
            />
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginLeft: 0,
              }}
            >
              <Image source={require("../image/trueOrder.png")} />
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{ marginLeft: 8 }}
                  source={require("../image/orderPlaced.png")}
                />
                <View style={{ marginLeft: 18 }}>
                  <Text
                    style={{
                      color: "rgba(46, 58, 89, 0.6)",
                      fontSize: 17,
                      fontWeight: "700",
                    }}
                  >
                    Order Placed
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "400",
                      marginTop: 3,
                      color: "rgba(46, 58, 89, 0.6)",
                    }}
                  >
                    We have recieved your order
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Image source={require("../image/deliveryaddres.png")} />
          <View style={{ width: "70%" }}>
            <Text style={{ fontSize: 19, fontWeight: "700", color: "#FF640D" }}>
              Delivery Address
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 20,
                marginTop: 5,
              }}
            >
              Sunshine building room no. 405, Thane 400798 Mumbai, west.
            </Text>
          </View>
          <Image source={require("../image/addressRight.png")} />
        </View>

       

       <View style={{marginTop:10,paddingBottom:150,justifyContent:"center",flexDirection:"row"}}>
       <Pressable
        style={{
          backgroundColor: "#FF640D",
          borderRadius: 5,
          height: 47,
          width: 180,
          marginTop: 20,
        }}
        onPress={Home}
      >
        <Text
          style={{
            textAlign: "center",
            paddingTop: 11,
            fontSize: 18,
            fontWeight: "700",
            color: "white",
          }}
        >
          BACK TO HOME
        </Text>
      </Pressable>
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
