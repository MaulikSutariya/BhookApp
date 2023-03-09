import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";

import { RadioButton } from "react-native-paper";

export default function Payment({ navigation }) {
  const navigateonboarding = () => {
    navigation.navigate("AddDeliveryAddress");
  };
  const [checked, setChecked] = useState("first");
  return (
    <ScrollView
      alwaysBounceVertical={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={{ height: "100%" }}
    >
      <View style={{ paddingTop: 40, width: "100%" }}>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 25,
            marginTop: 25,
          }}
          onPress={navigateonboarding}
        >
          <Image source={require("../image/right.png")} />
          <Text style={{ fontSize: 21, fontWeight: "700", marginLeft: 15 }}>
            Order summary
          </Text>
        </Pressable>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "white",
            height: 125,
            paddingLeft: 25,
            paddingRight: 25,
            marginTop: 20,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#3F3D56",
                height: 50,
                width: 50,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image source={require("../image/Address.png")} />
            </View>
            <Text style={{ fontSize: 14, fontWeight: "400", marginTop: 5 }}>
              Address
            </Text>
          </View>
          <View
            style={{
              height: 2,
              width: 60,
              borderColor: "#B4B4B4",
              borderWidth: 2,
              marginTop: -25,
              marginRight: -19,
            }}
          ></View>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#3F3D56",
                height: 50,
                width: 50,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image source={require("../image/OrderSummary.png")} />
            </View>
            <Text style={{ fontSize: 14, fontWeight: "400", marginTop: 5 }}>
              Order summary
            </Text>
          </View>
          <View
            style={{
              height: 2,
              width: 60,
              borderColor: "#B4B4B4",
              borderWidth: 2,
              marginTop: -25,
              marginLeft: -19,
            }}
          ></View>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#FF640D",
                height: 50,
                width: 50,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image source={require("../image/Payment.png")} />
            </View>
            <Text style={{ fontSize: 14, fontWeight: "700", marginTop: 5 }}>
              Payment
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "white",
            marginTop: 25,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: 700,
              paddingLeft: 25,
              paddingRight: 25,
              paddingTop: 25,
              paddingBottom: 15,
            }}
          >
            All other options
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: 30,
              width: "80%",
              alignItems: "center",
            }}
          >
            <RadioButton.Group
              onValueChange={(newValue) => setChecked(newValue)}
              value={checked}
            >
              <RadioButton.Item value="first" />
            </RadioButton.Group>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 21, fontWeight: 500 }}>UPI</Text>
              <Image source={require("../image/PaymentGoogle.png")} />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: 30,
              width: "80%",
              alignItems: "center",
            }}
          >
            <RadioButton.Group
              onValueChange={(newValue) => setChecked(newValue)}
              value={checked}
            >
              <RadioButton.Item value="second" />
            </RadioButton.Group>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 21, fontWeight: 500 }}>Wallets</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: 30,
              width: "80%",
              alignItems: "center",
            }}
          >
            <RadioButton.Group
              onValueChange={(newValue) => setChecked(newValue)}
              value={checked}
            >
              <RadioButton.Item value="third" />
            </RadioButton.Group>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 21, fontWeight: 500 }}>
                Credit / Debit / ATM Card
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: 30,
              width: "80%",
              alignItems: "center",
            }}
          >
            <RadioButton.Group
              onValueChange={(newValue) => setChecked(newValue)}
              value={checked}
            >
              <RadioButton.Item value="Fourth" />
            </RadioButton.Group>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 21, fontWeight: 500 }}>Net Banking</Text>
              <Image source={require("../image/PaymentPayple.png")} />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: 30,
              width: "80%",
              alignItems: "center",
            }}
          >
            <RadioButton.Group
              onValueChange={(newValue) => setChecked(newValue)}
              value={checked}
            >
              <RadioButton.Item value="Five" />
            </RadioButton.Group>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 21, fontWeight: 500 }}>
                Cash on Delivery ( COD )
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "white",
            paddingLeft: 25,
            paddingRight: 25,
            paddingTop: 25,
            paddingBottom: 25,
            marginTop: 25,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={{ fontSize: 27, fontWeight: 700, color: "#FF640D" }}>
            ₹200
          </Text>
          <Pressable
            style={{
              height: 50,
              backgroundColor: "#FF640D",
              borderRadius: 5,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "35%",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 17,
                fontWeight: "700",
                marginLeft: 10,
              }}
            >
              CONTINUE
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
