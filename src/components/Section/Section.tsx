import React from 'react';
import {Text, View} from 'react-native';

interface ISectionProps {
  title: string;
}

export function Section({title}: ISectionProps) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
