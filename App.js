import React, { useState } from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './routes/homeScreen';
import AboutScreen from './screens/about';
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
    drawerLabelStyle:
    {
      fontFamily: 'nunito-bold',
    },
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontFamily: 'nunito-bold'
    },
    headerShown: show,
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
    </NavigationContainer>
  );
}