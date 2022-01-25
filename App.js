import React, { useState } from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/home';
import AboutScreen from './screens/about';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const Drawer = createDrawerNavigator();

const screenOptions = {
  drawerLabelStyle:
  {
    fontFamily: 'nunito-bold',
  },
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontFamily: 'nunito-bold'
  }
};

export default function App() {

  let [fontsLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}