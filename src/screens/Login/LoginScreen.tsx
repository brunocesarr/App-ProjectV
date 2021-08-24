import React from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import {Button} from '../../components';

import LogoApp from '../../assets/images/Logo1.png';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';

import styles from '../../styles/screens/LoginScreen';

type LoginScreenProps = StackNavigationProp<any, 'Login'>;

export function LoginScreen() {
  const navigation = useNavigation<LoginScreenProps>();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Text style={styles.title}>Project V</Text>

      <Image source={LogoApp} style={styles.image} resizeMode="stretch" />

      <Text style={styles.subtitle}>
        Encontre informações de salas e laboratórios do prédio do curso Sistemas
        de Informação da Universidade Federal dos Vales do Jequitinhonha e
        Mucuri(UFVJM).
      </Text>

      <Button title={'Entrar'} onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
