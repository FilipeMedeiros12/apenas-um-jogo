import React from 'react';
import { Text, View, Image } from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import {styles} from './styles'

export function SignIn() {
  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />
      <Text>Opa meu chegado  </Text>
    </View>);
}



