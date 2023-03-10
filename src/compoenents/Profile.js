import { View, Text, ScrollView, Image,Pressable } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';

import Navbar from "./Navbar";

// images
import Notifications from "../image/Notifications.png";
import Paymentmethod from "../image/Paymentmethod.png";
import Rewardcredits from "../image/Rewardcredits.png";
import InviteFriends from "../image/InviteFriends.png";
import Trackorder from "../image/Trackorder.png";
import Orderhistory from "../image/Orderhistory.png";
import About from "../image/About.png";
import Signout from "../image/Signout.png";

// Navicons icons
import HomeImg from "../image/Home.png";
import FavoriteImg from "../image/Favorite.png";
import ProfileImg from "../image/ProfileCurrent.png";
import SearchImg from "../image/Search.png";

export default function Profile() {
  const navigation = useNavigation();
  const navigateonboarding = () => {
    navigation.navigate("TrackOrder");
  };
  const ProfileMenu = [
    {
      MenuImg: Notifications,
      MenuName: "Notifications",
      destination: 'Home'
    },
    {
      MenuImg: Paymentmethod,
      MenuName: "Payment method",
      destination: 'PaymentMethod'
    },
    {
      MenuImg: Rewardcredits,
      MenuName: "Reward credits",
      destination: 'Home'
    },
    {
      MenuImg: InviteFriends,
      MenuName: "Invite Friends",
      destination: 'Home'
    },
    {
      MenuImg: Trackorder,
      MenuName: "Track order",
      destination: 'TrackOrdersMain'
    },
    {
      MenuImg: Orderhistory,
      MenuName: "Order history",
      destination: 'Home'
    },
    {
      MenuImg: About,
      MenuName: "About us",
      destination: 'Home'
    },
    {
      MenuImg: Signout,
      MenuName: "Sign out",
      destination: 'Login'
    },
  ];
  return (
    <View>
      <ScrollView style={{ height: "100%", paddingTop: 70 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            padding: 25,
          }}
        >
          <Image source={require("../image/profileimg.png")} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "57%",
              marginLeft: 20,
            }}
          >
            <View>
              <Text style={{ fontSize: 19, fontWeight: 700 }}>
                Maulik Patel
              </Text>
              <Text style={{ fontSize: 12, fontWeight: 400, marginTop: 2 }}>
                Maulikpatel05@gmail.com
              </Text>
            </View>
            <Image source={require("../image/RightArrow.png")} />
          </View>
        </View>

        <View style={{ paddingLeft: 25, paddingRight: 25, paddingBottom: 25 }}>
          {ProfileMenu.map((menu, i) => {
            return (
              <Pressable
              onPress={() => navigation.navigate(menu.destination)}
                key={i}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-around",
                  marginTop: 35,
                }}
              >
                <Image source={menu.MenuImg} />
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: "85%",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 17, fontWeight: "500" }}>
                    {menu.MenuName}
                  </Text>
                  <Image source={require("../image/RightArrow.png")} />
                </View>
              </Pressable>
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
