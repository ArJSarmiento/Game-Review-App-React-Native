import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from '../screens/details';
import Home from '../screens/home';

const Stack = createNativeStackNavigator();

export default function HomeScreen({ showHandler }) {
    let screenOptions = {
        drawerLabelStyle:
        {
            fontFamily: 'nunito-bold',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
            fontFamily: 'nunito-bold',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
        },
        headerShown: !showHandler(),
    };

    return (
        <Stack.Navigator screenOptions={screenOptions} >
            <Stack.Screen name="Home" >
                {props => <Home {...props} showHandler={showHandler} />}
            </Stack.Screen>
            <Stack.Screen name="Details"  >
                {props => <DetailsScreen {...props} showHandler={showHandler} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}