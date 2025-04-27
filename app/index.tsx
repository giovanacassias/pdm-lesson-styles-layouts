import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { Stack } from "expo-router";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ScreenWrapper from "@/components/ScreenWrapper";
import Card from "@/components/Card";
import Title from "@/components/Title";
import MainCard from "@/components/cards/MainCard";
import MemberCard from "@/components/cards/MemberCard";

export default function index() {
  return (
    <ScreenWrapper title="Your Party">
      <MainCard
        title="Vice Awakens"
        participating={3}
        imgUrl="https://cdn-icons-png.flaticon.com/512/2603/2603009.png"
        name="Vice, The Shadow Wyrm"
        hp={1224}
        damageDone={21}
      />

      <Title>MEMBERS</Title>

      <Card>
        <Text>Invite a member</Text>
      </Card>

      <Card>
        <Text>index</Text>
      </Card>

      <MemberCard
        imageUrl="https://imgv3.fotor.com/images/gallery/An-elf-with-white-hair.jpg"
        name="Sophiala"
        username="@bestieee"
        level={12}
        position="Leader"
      />
    </ScreenWrapper>
  );
}
