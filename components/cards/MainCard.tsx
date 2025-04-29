import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "../Card";

type MainCardProps = {
  title: string;
  participating: number;
  imgUrl: string;
  name: string;
  hp: number;
  damageDone: number;
};

export default function MainCard({
  title,
  participating,
  imgUrl,
  name,
  hp,
  damageDone,
}: MainCardProps) {
  return (
    <Card>
      <View style={styles.container}>
        <View style={styles.cardHearder}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.seconderyText}>
            {participating}/10 Participating
          </Text>
        </View>

        <Image source={{ uri: imgUrl }} width={150} height={150} />

        <View style={styles.statsContainer}>
          <View style={styles.icon}>
            <MaterialCommunityIcons name="sword" size={36} color="black" />
          </View>

          <View style={styles.statsRight}>
            <Text style={styles.primaryText}>{name}</Text>

            <View style={styles.barContainer}>
              <View style={{ ...styles.bar, width: "80%" }} />
            </View>

            <Text style={styles.seconderyText}>{hp} / 1500 HP</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>{damageDone} Damage Done</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 16,
    position: "relative",
    paddingBottom: 40,
  },
  statsContainer: {
    flexDirection: "row",
    width: "100%",
  },
  statsRight: {
    flex: 1,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
  },
  barContainer: {
    width: "100%",
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgb(225 224 227)",
    position: "relative",
  },
  bar: {
    backgroundColor: "rgb(255 97 101)",
    height: 8,
    borderRadius: 4,
    position: "absolute",
  },

  cardHearder: {
    width: "100%",
    alignItems: "center",
  },

  cardTitle: {
    fontWeight: "800",
    fontSize: 18,
  },

  primaryText: {
    fontWeight: "800",
  },

  seconderyText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#909090",
  },

  footer: {
    backgroundColor: "rgb(255 166 36)",
    width: Dimensions.get("screen").width - 32,
    height: 40,
    padding: 10,
    borderEndEndRadius: 10,
    borderStartEndRadius: 10,
    position: "absolute",
    bottom: -16,
    alignItems: "center",
  },

  footerText: {
    color: "white",
    fontWeight: "600",
  },
});
