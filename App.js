import React, { useState } from 'react';
import { Button, View, Image, StyleSheet, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './routes/homeScreen';
import AboutScreen from './screens/about';
import ImageHeader from './shared/header';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const Drawer = createDrawerNavigator();

export default function App() {
  const [show, setShow] = useState(true);

  let showHandler = (value) => {
    if (value === undefined || value === null) {
      return show
    }
    else {
      return setShow(value);
    }
  };

  let screenOptions = {
    headerBackground: () => (
      <Image
        style={{ height: "100%" }}
        source={require('./assets/game_bg.png')}
      />
    ),
    drawerLabelStyle:
    {
      fontFamily: 'nunito-bold',
    },
    headerTitle: () => (
      <ImageHeader title="GameZone" />
    ),

    headerShown: show,
    swipeEnabled: show
  };

  let [fontsLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  let homeComponent = () => {
    return <HomeScreen showHandler={showHandler} />
  }

  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Drawer.Screen name="Home" component={homeComponent} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer >
  );
}
