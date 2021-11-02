import React from 'react';
import {View} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import Wave from '../../componets/Wave';
export default function Sign() {
  return (
    <View style={{height: '100%'}}>
      <Wave />
      <Input placeholder="Email" />
    </View>
  );
}
