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
          <View style={styles.headerCard}>
            <View style={styles.nameUsername}>
              <Text style={styles.nameText}>{name}</Text>
              <Text style={styles.usernameText}>{username}</Text>
            </View>
            <View style={styles.hearderIcons}>
              <Image
                source={require("../../assets/images/blue-sword2.png")}
                style={styles.swordIcon}
              />
              <Image
                source={require("../../assets/images/arrow-up.png")}
                style={styles.swordIcon}
              />
            </View>
          </View>
          <View style={styles.barDiv}>
            <View style={styles.barContainer}>
              <View style={{ ...styles.bar, width: "100%" }} />
            </View>
            <View style={styles.barContainer}>
              <View style={[styles.bar, styles.blueBar]} />
            </View>
          </View>
          <View style={styles.levelContainer}>
            <Text style={styles.levelText}>Level{level}</Text>
            <Text style={styles.levelText}>{position}</Text>
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 120,
  },

  cardImg: {
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
    width: "65%",
    height: "100%",
    padding: 10,
  },

  nameText: {
    fontWeight: "800",
  },

  usernameText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#909090",
    marginBottom: 8,
  },

  barDiv: {
    flexDirection: "column",
    gap: 8,
  },

  barContainer: {
    width: "100%",
    height: 5,
    borderRadius: 4,
    backgroundColor: "rgb(225 224 227)",
    position: "relative",
  },

  bar: {
    backgroundColor: "rgb(255 97 101)",
    height: 5,
    borderRadius: 8,
    position: "absolute",
    width: "100%",
  },

  blueBar: {
    backgroundColor: "#1a9cb8",
    width: "70%",
  },

  levelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },

  levelText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#909090",
  },

  headerCard: {
    flexDirection: "row",
    marginBottom: 5,
  },

  nameUsername: {
    flexDirection: "column",
    width: "70%",
  },

  hearderIcons: {
    width: "30%",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
  },

  swordIcon: {
    height: 25,
    width: 25,
  },
});
