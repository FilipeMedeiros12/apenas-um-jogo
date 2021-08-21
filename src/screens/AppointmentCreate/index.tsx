import React, { useState } from "react";
import { LinearGradient } from "react-native-svg";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Fontisto } from "@expo/vector-icons";
import { ImageBackground, Text, View, FlatList } from "react-native";

import { Header } from "../../components/Header";
import { Member } from "../../components/Member";
import { Background } from "../../components/Background";

import { theme } from "../../global/styles/themes";
import { styles } from "./styles";
import BannerImg from "../../assets/banner.png"
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

export function AppointmentCreate() {
  const members = [
    {
      id: '1',
      username: 'Filipe',
      avatar_url: 'https://github.com/filipemedeiros12.png',
      status: 'online',
    },
    {
      id: '2',
      username: 'Dione',
      avatar_url: 'https://github.com/Dione-Vianna.png',
      status: 'offline',
    },

  ]

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }


      />


    </Background>

  )
}