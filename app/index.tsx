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
        imgUrl="https://res.cloudinary.com/ddb437lsi/image/upload/v1745783465/dragon.webp"
        name="Vice, The Shadow Wyrm"
        hp={1224}
        damageDone={21}
      />

      <Title>MEMBERS</Title>

      <MemberCard
        imageUrl="https://imgv3.fotor.com/images/gallery/An-elf-with-white-hair.jpg"
        name="Sophiala"
        username="@bestieee"
        level={20}
        position="Master"
      />

      <MemberCard
        imageUrl="https://i.pinimg.com/236x/ee/ce/5c/eece5cfa9b28a32c5a756fde1515df66.jpg"
        name="Aidowu"
        username="@getthatbread"
        level={12}
        position="Leader"
      />

      <MemberCard
        imageUrl="https://i.pinimg.com/236x/ee/ce/5c/eece5cfa9b28a32c5a756fde1515df66.jpg"
        name="Aidowu"
        username="@getthatbread"
        level={12}
        position="Leader"
      />

      <MemberCard
        imageUrl="https://i.pinimg.com/236x/ee/ce/5c/eece5cfa9b28a32c5a756fde1515df66.jpg"
        name="Aidowu"
        username="@getthatbread"
        level={12}
        position="Leader"
      />
    </ScreenWrapper>
  );
}
