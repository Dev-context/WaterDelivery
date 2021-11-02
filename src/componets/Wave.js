import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default function Wave() {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Svg width="100%" height="100%" stroke="black">
        <Path fill="#006bff" fill-opacity="1" />
      </Svg>
    </View>
  );
}
