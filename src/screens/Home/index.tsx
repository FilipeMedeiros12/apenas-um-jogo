import React, {useState} from "react";
import { View, Text, FlatList } from "react-native";
import { CategorySelect } from "../../components/CategorySelect";
import { Appointment } from "../../components/Appointment";
import { ListDriver } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Button } from "../../components/Button";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";

export function Home(){
  const [category, setCategory] = useState('');

  const appointments = [
    {
      id:'1',
      guild: 
    }
  ]

  return(
    <View>
  <Text></Text>
    </View>
  );
}