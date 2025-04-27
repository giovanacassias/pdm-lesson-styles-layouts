import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "../Card";

type MemberCardProps = {
  imageUrl: string;
  name: string;
  username: string;
  level: number;
  position: string;
  /*   icon1: string;
  icon2: string; */
};

export default function MemberCard({
  imageUrl,
  name,
  username,
  level,
  position,
}: MemberCardProps) {
  return (
    <Card>
      <View style={styles.container}>
        <View style={styles.cardImg}>
          <Image source={{ uri: imageUrl }} style={styles.img} />
        </View>
        <View style={styles.cardInfo}>
          <Text>{name}</Text>
          <Text>{username}</Text>
          <Text>Level {level}</Text>
          <Text>{position}</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "red",
    height: 120,
  },

  cardImg: {
    backgroundColor: "yellow",
    width: "35%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    width: 100,
    height: 100,
  },

  cardInfo: {
    backgroundColor: "green",
    width: "65%",
    height: "100%",
    padding: 20,
  },
});
