import { View, Text, Image, Pressable, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";

export default function AddDeliveryAddress({ navigation }) {
  const [altmobile, setAltmobile] = useState(false);
  const navigateonboarding = () => {
    navigation.navigate("Dish");
  };
  const navigateonboarding2 = () => {
    navigation.navigate("OrderSummary");
  };
  const alternatemobile = () => {
    setAltmobile(!altmobile);
  };
  return (
   <ScrollView>
     <View style={{ padding: 25, paddingTop: 65 }}>
      <Pressable
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={navigateonboarding}
      >
        <Image source={require("../image/right.png")} />
        <Text style={{ fontSize: 21, fontWeight: "700", marginLeft: 15 }}>
          Add delivery address
        </Text>
      </Pressable>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: 25,
        }}
      >
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
            <Image source={require("../image/Address.png")} />
          </View>
          <Text style={{ fontSize: 14, fontWeight: "700", marginTop: 5 }}>
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

      <TextInput
        placeholder="Name*"
        style={{
          height: 60,
          borderRadius: 10,
          backgroundColor: "white",
          paddingLeft: 20,
          marginTop: 35,
          fontSize: 17,
          fontWeight: "400",
        }}
      />

      <TextInput
        placeholder="Phone number (Required)*"
        style={{
          height: 60,
          borderRadius: 10,
          backgroundColor: "white",
          paddingLeft: 20,
          marginTop: 25,
          fontSize: 17,
          fontWeight: "400",
        }}
      />

      <Pressable onPress={alternatemobile}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "700",
            color: "#FF640D",
            marginTop: 13,
            marginLeft: 5,
          }}
        >
          + Add Alternate Phone Number
        </Text>
      </Pressable>

      {altmobile && (
        <TextInput
          placeholder="Add Alternate Phone number "
          style={{
            height: 60,
            borderRadius: 10,
            backgroundColor: "white",
            paddingLeft: 20,
            marginTop: 25,
            fontSize: 17,
            fontWeight: "400",
          }}
        />
      )}

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <TextInput
          placeholder="Pincode*"
          style={{
            height: 60,
            borderRadius: 10,
            backgroundColor: "white",
            paddingLeft: 20,
            fontSize: 17,
            fontWeight: "400",
            width: "50%",
            margin: 5,
          }}
        />
        <Pressable
          style={{
            height: 56,
            backgroundColor: "#FF640D",
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
            margin: 5,
          }}
        >
          <Image source={require("../image/currentlocation.png")} />
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "700",
              marginLeft: 10,
            }}
          >
            Use my location
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <TextInput
          placeholder="State*"
          style={{
            height: 60,
            borderRadius: 10,
            backgroundColor: "white",
            paddingLeft: 20,
            marginTop: 10,
            fontSize: 17,
            fontWeight: "400",
            width: "49%",
            marginRight: 10,
          }}
        />

        <TextInput
          placeholder="City*"
          style={{
            height: 60,
            borderRadius: 10,
            backgroundColor: "white",
            paddingLeft: 20,
            marginTop: 10,
            fontSize: 17,
            fontWeight: "400",
            width: "49%",
          }}
        />
      </View>

      <TextInput
        placeholder="House No. Building Name (Required)*"
        style={{
          height: 60,
          borderRadius: 10,
          backgroundColor: "white",
          paddingLeft: 20,
          marginTop: 17,
          fontSize: 17,
          fontWeight: "400",
        }}
      />

      <TextInput
        placeholder="Road name, Area, colony*"
        style={{
          height: 60,
          borderRadius: 10,
          backgroundColor: "white",
          paddingLeft: 20,
          marginTop: 17,
          fontSize: 17,
          fontWeight: "400",
        }}
      />

      <Pressable
        style={{
          height: 50,
          backgroundColor: "#FF640D",
          borderRadius: 5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginTop: 20,
        }}
        onPress={navigateonboarding2}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "700",
            marginLeft: 10,
          }}
        >
          Save & Continue
        </Text>
      </Pressable>
    </View>
   </ScrollView>
  );
}
