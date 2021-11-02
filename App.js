import React from 'react';
import {View} from 'react-native';
import StackNavigator from './src/screens/stacks/Stack';
export default function App() {
  return (
    <View style={{flex: 1}}>
      <StackNavigator />
    </View>
  );
}
