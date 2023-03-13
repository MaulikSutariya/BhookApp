import { View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';

export default function Navbar({Search,Profile,Favorite,Home}) {
  const navigation = useNavigation();
  const LikeDishes = () => {
    navigation.navigate("LikeDishes");
  };
  const ProfilePage = () => {
    navigation.navigate("Profile");
  };
  const HomePage = () => {
    navigation.navigate("Home");
  };
  const SearchPage = () => {
    navigation.navigate("Search");
  };

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        position: "absolute",
        bottom: 0,
        backgroundColor: "white",
        height: 70,
        borderRadius: 15,
      }}
    >
      <Pressable onPress={HomePage}>
        <Image source={Home} />
      </Pressable>
      <Pressable onPress={LikeDishes}>
        <Image source={Favorite} />
      </Pressable>
      <Pressable onPress={SearchPage}>
        <Image source={Search} />
      </Pressable>
      <Pressable onPress={ProfilePage}>
        <Image source={Profile} />
      </Pressable>
    </View>
  );
}
