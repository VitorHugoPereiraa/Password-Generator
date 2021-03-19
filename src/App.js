import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import Home from "./components/Home"

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar style="light" />
      <Home />
    </View>
  );
}


