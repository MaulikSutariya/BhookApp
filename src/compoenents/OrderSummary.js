import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";

export default function OrderSummary({ navigation }) {
  const navigateonboarding = () => {
    navigation.navigate("AddDeliveryAddress");
  };

  return (
    <ScrollView style={{ height: "100%" }}>
      <View style={{ paddingTop: 40, height: "100%" }}>
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
                backgroundColor: "#FF640D",
                height: 50,
                width: 50,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image source={require("../image/OrderSummary.png")} />
            </View>
            <Text style={{ fontSize: 14, fontWeight: "700", marginTop: 5 }}>
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
                backgroundColor: "#3F3D56",
                height: 50,
                width: 50,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image source={require("../image/Payment.png")} />
            </View>
            <Text style={{ fontSize: 14, fontWeight: "400", marginTop: 5 }}>
              Payment
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "white",
            paddingLeft: 25,
            paddingRight: 25,
            paddingTop: 15,
            paddingBottom: 15,
            marginTop: 25,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: 700 }}>Abhishek Kumar</Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 400,
              lineHeight: 20,
              marginTop: 8,
            }}
          >
            Sunshine building room no. 405, Thane - 400798 Mumbai 8828447664
          </Text>
          <Pressable
            style={{
              height: 50,
              backgroundColor: "#FF640D",
              borderRadius: 5,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              marginTop: 25,
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
              Change or Add address
            </Text>
          </Pressable>
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
          }}
        >
          <View>
            <Text style={{ fontSize: 17, fontWeight: 700 }}>
              Vegan Chickpea....
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 400,
                marginTop: 8,
                color: "gray",
              }}
            >
              Seller: Raj Kitchen
            </Text>
            <Text
              style={{
                fontSize: 21,
                fontWeight: 700,
                color: "gray",
                marginTop: 10,
              }}
            >
              ₹200
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 400,
                marginTop: 5,
                color: "gray",
              }}
            >
              Delivery by tomorrow, Fri
            </Text>
          </View>
          <Image source={require("../image/OrderSummaryImg.png")} />
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
