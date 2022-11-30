import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native"
import Tabs from './navigation/tabs';import { NativeBaseProvider } from 'native-base';
;

export default function App() {

  return (
    <NativeBaseProvider>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
      />
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

